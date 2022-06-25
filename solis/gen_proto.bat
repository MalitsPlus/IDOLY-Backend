python proto_analyzer_meta.py
python proto_analyzer_ts.py
protoc -I=D:/GitHub/SolisClient/cache --python_out=D:/GitHub/SolisClient/cache ProtoEnum.proto ProtoApi.proto ProtoMaster.proto ProtoTransaction.proto
:: protoc -I=C:/home/GitHub/RVS-Private/ipr/api/google/api --python_out=C:/home/GitHub/RVS-Private/ipr/api/google/api annotations.proto http.proto

:: generate Enum, Master, Transaction
:: python -m grpc_tools.protoc --proto_path=. ./ProtoEnum.proto ./ProtoMaster.proto ./ProtoTransaction.proto --python_out=.

:: generate Api
:: python -m grpc_tools.protoc --proto_path=. ./ProtoApi.proto --python_out=. --grpc_python_out=.
:: python gen_grpc_aftermath.py
