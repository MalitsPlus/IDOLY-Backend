import re
from pathlib import Path

FILE_NAME = "ProtoApi_pb2_grpc.py"
NEW_FILE_NAME = "ProtoApi_grpc.py"
func_list = list[tuple[str, str, str]]()
serializer_template = """def {new_func_name}(message):
    origin = {func_name}(message)
    return serialize(origin)
"""
deserializer_template = """def {new_func_name}(raw):
    data = deserialize(raw)
    return {func_name}(data)
"""

def _repl(m: re.Match) -> str:
    global func_list
    original_func = str(m.group(0))
    cls_name, func_name = re.search(r"\.(\w+)\.(\w+)$", original_func).groups()
    if func_name == "SerializeToString":
        new_func_suffix = "serializer"
    elif func_name == "FromString":
        new_func_suffix = "deserializer"
    else:
        raise "Unknown function name."
    new_func_name = f"{cls_name}_{new_func_suffix}"
    func_list.append((new_func_suffix, new_func_name, original_func))
    return new_func_name

def main():
    serializer_ptn = r"(?<=_serializer=)[\w\.]+"
    deserializer_ptn = r"(?<=_deserializer=)[\w\.]+"
    code_text = Path(FILE_NAME).read_text(encoding="utf8")
    code_text = re.sub(serializer_ptn, _repl, code_text)
    code_text = re.sub(deserializer_ptn, _repl, code_text)

    code_text = "from marshaller import serialize, deserialize\n\n" + code_text
    for type, new_func_name, original_func in func_list:
        if type == "serializer":
            func_text = serializer_template
        elif type == "deserializer":
            func_text = deserializer_template
        else:
            raise "This cannot be happend."
        func_text = func_text\
            .replace("{new_func_name}", new_func_name)\
            .replace("{func_name}", original_func)
        code_text += func_text
    Path(NEW_FILE_NAME).write_text(code_text)

if __name__ == "__main__":
    main()
