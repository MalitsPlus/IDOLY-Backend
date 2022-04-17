File
  = _ (CSharpUsing _)* _ ns:CSharpNamespace _ {
    return ns
  }

CSharpUsing
  = "using" _ PackagePath _ ";"

CSharpNamespace
  = "namespace" _ PackagePath _ "{" _ enums:Enum* _ "}" {
    return enums
  }


Enum
  = _ "[ProtoContract]" _ head:EnumHeader _ "{" _ values:EnumItems* _ "}" _ {
    return {name: head.name, values}
  }

_ "whitespace"
  = [ \t\r\n]*

EnumItems
  = _ line:EnumItemLine _ {
    return line
  }

Integer
  = _ [0-9]+ { return parseInt(text(), 10); }

PackagePath
  = [A-Za-z\.]+

AlphaNumeric
  = [a-zA-z0-9]

Identifer
  = l:AlphaNumeric+ {
    return l.join("")
  }

EnumHeader
  = "public" _ "enum" _ name:Identifer {
    return {name}
  }

EnumItemLine
  = "[ProtoMember(" _ id:Integer _ ")]" _ name:Identifer "," {
  	return {id, name}
  }

