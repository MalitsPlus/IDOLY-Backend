from concurrent import futures
import logging

import grpc

import ProtoApi_pb2 as apip
import ProtoApi_grpc as apig
import ProtoTransaction_pb2 as transp

class SystemServ(apig.SystemServicer):
    def Check(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.SystemCheckResponse(keepAliveTimeMilliseconds=321)

class AuthServ(apig.AuthServicer):
    def Login(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.AuthLoginResponse(gameAuthToken="fweoaf9ytg2w3hfg")

class MasterServ(apig.MasterServicer):
    def Get(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        master_tag = transp.MasterTag(version="mmaasstteerrvveerrssiioonn1234")
        return apip.MasterGetResponse(masterTag=master_tag)

class UserServ(apig.UserServicer):
    def Get(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.UserGetResponse()

class HomeServ(apig.HomeServicer):
    def Login(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.HomeLoginResponse()

    def Enter(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.HomeEnterResponse()

class DokanServ(apig.DokanServicer):
    def List(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.DokanListResponse()

class NoticeServ(apig.NoticeServicer):
    def List(self, request, context):
        metadata = dict(context.invocation_metadata())
        user_agent = metadata["user-agent"]
        context.send_initial_metadata([("mt-key", "mt-dat")])
        return apip.NoticeListResponse()

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    # helloworld_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)

    apig.add_SystemServicer_to_server(SystemServ(), server)
    apig.add_AuthServicer_to_server(AuthServ(), server)
    apig.add_MasterServicer_to_server(MasterServ(), server)
    apig.add_UserServicer_to_server(UserServ(), server)
    apig.add_HomeServicer_to_server(HomeServ(), server)
    apig.add_DokanServicer_to_server(DokanServ(), server)
    apig.add_NoticeServicer_to_server(NoticeServ(), server)

    with open("localhost.key", "rb") as fk:
        private_key = fk.read()
    with open("localhost.crt", "rb") as fc:
        certificate_chain = fc.read()

    server_credential = grpc.ssl_server_credentials(
        [(private_key, certificate_chain)])

    # server.add_insecure_port('0.0.0.0:50051')
    server.add_insecure_port('0.0.0.0:50052')
    # idk why but while I set a secure_port, server throws a 
    # Handshake failed with fatal error SSL_ERROR_SSL: error:100000f7:SSL routines:OPENSSL_internal:WRONG_VERSION_NUMBER.
    # server.add_secure_port('0.0.0.0:50052', server_credential)
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
