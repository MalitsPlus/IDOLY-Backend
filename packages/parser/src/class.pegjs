File
  = _ (CSharpUsing _)* _ ns:CSharpNamespace _ {
    return ns
  }

CSharpUsing
  = "using" _ (Identifier _ "=")? _ PackagePath _ ";"

CSharpNamespace
  = "namespace" _ PackagePath _ "{" _ classes:Class* _ "}" {
    return classes
  }


Class
  = _ "[ProtoContract]" _ head:ClassHeader _ "{" _ fields:ClassItems* _ "}" _ {
    return {name: head.name, fields}
  }

_ "whitespace"
  = [ \t\r\n]*

ClassItems
  = _ line:ClassMemberItemLine _ {
    return line
  }

Integer
  = [0-9]+ { return parseInt(text(), 10); }

PackagePath
  = [A-Za-z\.]+

GoodChar
  = [A-Za-z0-9_]

Identifier
  = l:GoodChar+ {
    return l.join("")
  }

ClassHeader
  = "public" _ "class" _ name:Identifier {
    return {name}
  }

ClassMemberItemLine
  = "[ProtoMember(" _ id:Integer _ ")]" _ access:AccessParameter _ type:Type _ name:Identifier _ FuncBody {
  	return {id, name, access, type}
  }

FuncBody
  = "{" _ "get" _ ";" _ "set" _ ";" _ "}"

Type
   = name:Identifier _ "<" _ parameter:Type _ ">" {
     return {name, parameter}
   }
   / name:Identifier {
     return name
   }
  
AccessParameter
  = "public"
  / "private"
  / "protected"