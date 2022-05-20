from marshaller import serialize, deserialize

"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import ProtoApi_pb2 as ProtoApi__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2

class SystemStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Check = channel.unary_unary(
                '/api.System/Check',
                request_serializer=SystemCheckRequest_serializer,
                response_deserializer=SystemCheckResponse_deserializer,
                )


class SystemServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Check(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SystemServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Check': grpc.unary_unary_rpc_method_handler(
                    servicer.Check,
                    request_deserializer=SystemCheckRequest_deserializer,
                    response_serializer=SystemCheckResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.System', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class System(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Check(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.System/Check',
            ProtoApi__pb2.SystemCheckRequest.SerializeToString,
            ProtoApi__pb2.SystemCheckResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class AuthStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Login = channel.unary_unary(
                '/api.Auth/Login',
                request_serializer=AuthLoginRequest_serializer,
                response_deserializer=AuthLoginResponse_deserializer,
                )


class AuthServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Login(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AuthServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Login': grpc.unary_unary_rpc_method_handler(
                    servicer.Login,
                    request_deserializer=AuthLoginRequest_deserializer,
                    response_serializer=AuthLoginResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.Auth', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Auth(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Login(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Auth/Login',
            ProtoApi__pb2.AuthLoginRequest.SerializeToString,
            ProtoApi__pb2.AuthLoginResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class MasterStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Get = channel.unary_unary(
                '/api.Master/Get',
                request_serializer=Empty_serializer,
                response_deserializer=MasterGetResponse_deserializer,
                )


class MasterServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MasterServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=Empty_deserializer,
                    response_serializer=MasterGetResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.Master', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Master(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Get(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Master/Get',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ProtoApi__pb2.MasterGetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class UserStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Get = channel.unary_unary(
                '/api.User/Get',
                request_serializer=Empty_serializer,
                response_deserializer=UserGetResponse_deserializer,
                )


class UserServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UserServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Get': grpc.unary_unary_rpc_method_handler(
                    servicer.Get,
                    request_deserializer=Empty_deserializer,
                    response_serializer=UserGetResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.User', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class User(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Get(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.User/Get',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ProtoApi__pb2.UserGetResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class HomeStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Login = channel.unary_unary(
                '/api.Home/Login',
                request_serializer=HomeLoginRequest_serializer,
                response_deserializer=HomeLoginResponse_deserializer,
                )
        self.Enter = channel.unary_unary(
                '/api.Home/Enter',
                request_serializer=HomeEnterRequest_serializer,
                response_deserializer=HomeEnterResponse_deserializer,
                )


class HomeServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Login(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Enter(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_HomeServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Login': grpc.unary_unary_rpc_method_handler(
                    servicer.Login,
                    request_deserializer=HomeLoginRequest_deserializer,
                    response_serializer=HomeLoginResponse_serializer,
            ),
            'Enter': grpc.unary_unary_rpc_method_handler(
                    servicer.Enter,
                    request_deserializer=HomeEnterRequest_deserializer,
                    response_serializer=HomeEnterResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.Home', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Home(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Login(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Home/Login',
            ProtoApi__pb2.HomeLoginRequest.SerializeToString,
            ProtoApi__pb2.HomeLoginResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Enter(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Home/Enter',
            ProtoApi__pb2.HomeEnterRequest.SerializeToString,
            ProtoApi__pb2.HomeEnterResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class DokanStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.List = channel.unary_unary(
                '/api.Dokan/List',
                request_serializer=Empty_serializer,
                response_deserializer=DokanListResponse_deserializer,
                )


class DokanServicer(object):
    """Missing associated documentation comment in .proto file."""

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_DokanServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=Empty_deserializer,
                    response_serializer=DokanListResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.Dokan', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Dokan(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def List(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Dokan/List',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ProtoApi__pb2.DokanListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class NoticeStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.List = channel.unary_unary(
                '/api.Notice/List',
                request_serializer=Empty_serializer,
                response_deserializer=NoticeListResponse_deserializer,
                )


class NoticeServicer(object):
    """Missing associated documentation comment in .proto file."""

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_NoticeServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=Empty_deserializer,
                    response_serializer=NoticeListResponse_serializer,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.Notice', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Notice(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def List(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.Notice/List',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            ProtoApi__pb2.NoticeListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
def SystemCheckRequest_serializer(message):
    origin = ProtoApi__pb2.SystemCheckRequest.SerializeToString(message)
    return serialize(origin)
def SystemCheckResponse_serializer(message):
    origin = ProtoApi__pb2.SystemCheckResponse.SerializeToString(message)
    return serialize(origin)
def AuthLoginRequest_serializer(message):
    origin = ProtoApi__pb2.AuthLoginRequest.SerializeToString(message)
    return serialize(origin)
def AuthLoginResponse_serializer(message):
    origin = ProtoApi__pb2.AuthLoginResponse.SerializeToString(message)
    return serialize(origin)
def Empty_serializer(message):
    origin = google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString(message)
    return serialize(origin)
def MasterGetResponse_serializer(message):
    origin = ProtoApi__pb2.MasterGetResponse.SerializeToString(message)
    return serialize(origin)
def Empty_serializer(message):
    origin = google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString(message)
    return serialize(origin)
def UserGetResponse_serializer(message):
    origin = ProtoApi__pb2.UserGetResponse.SerializeToString(message)
    return serialize(origin)
def HomeLoginRequest_serializer(message):
    origin = ProtoApi__pb2.HomeLoginRequest.SerializeToString(message)
    return serialize(origin)
def HomeEnterRequest_serializer(message):
    origin = ProtoApi__pb2.HomeEnterRequest.SerializeToString(message)
    return serialize(origin)
def HomeLoginResponse_serializer(message):
    origin = ProtoApi__pb2.HomeLoginResponse.SerializeToString(message)
    return serialize(origin)
def HomeEnterResponse_serializer(message):
    origin = ProtoApi__pb2.HomeEnterResponse.SerializeToString(message)
    return serialize(origin)
def Empty_serializer(message):
    origin = google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString(message)
    return serialize(origin)
def DokanListResponse_serializer(message):
    origin = ProtoApi__pb2.DokanListResponse.SerializeToString(message)
    return serialize(origin)
def Empty_serializer(message):
    origin = google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString(message)
    return serialize(origin)
def NoticeListResponse_serializer(message):
    origin = ProtoApi__pb2.NoticeListResponse.SerializeToString(message)
    return serialize(origin)
def SystemCheckResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.SystemCheckResponse.FromString(data)
def SystemCheckRequest_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.SystemCheckRequest.FromString(data)
def AuthLoginResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.AuthLoginResponse.FromString(data)
def AuthLoginRequest_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.AuthLoginRequest.FromString(data)
def MasterGetResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.MasterGetResponse.FromString(data)
def Empty_deserializer(raw):
    data = deserialize(raw)
    return google_dot_protobuf_dot_empty__pb2.Empty.FromString(data)
def UserGetResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.UserGetResponse.FromString(data)
def Empty_deserializer(raw):
    data = deserialize(raw)
    return google_dot_protobuf_dot_empty__pb2.Empty.FromString(data)
def HomeLoginResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.HomeLoginResponse.FromString(data)
def HomeEnterResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.HomeEnterResponse.FromString(data)
def HomeLoginRequest_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.HomeLoginRequest.FromString(data)
def HomeEnterRequest_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.HomeEnterRequest.FromString(data)
def DokanListResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.DokanListResponse.FromString(data)
def Empty_deserializer(raw):
    data = deserialize(raw)
    return google_dot_protobuf_dot_empty__pb2.Empty.FromString(data)
def NoticeListResponse_deserializer(raw):
    data = deserialize(raw)
    return ProtoApi__pb2.NoticeListResponse.FromString(data)
def Empty_deserializer(raw):
    data = deserialize(raw)
    return google_dot_protobuf_dot_empty__pb2.Empty.FromString(data)
