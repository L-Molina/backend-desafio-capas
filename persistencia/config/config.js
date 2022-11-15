const config = {  
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/test',

  firebase: {
    type: "service_account",
    project_id: "test-coder-840cf",
    private_key_id: "b89c652f3bb8aa0e961f1740aeb47d7bdf6ca589",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDMVGjE4Ad0yO/g\nrQrY66l1W5zhDbLq8sXj8zzK9iGYgwPZ9w3hhg0Ac3fvb/hVHBP7WYktQ2VmTQtE\nN/3XuwucawSNRm4cxNC1SRdsQ87TRlOMg7ru7ia7RmZRHRYd8sQkVdvrPCgv9W5f\nlPmHv1SXYWUXBCyIF5isSLskicxfCgvAy8ryEnW6KRkb05ViRabIljpwqjHb405B\n0GZk3vyeqxlyxHnEUwehB1hCMTwZvlcVwlC/Ep0rsrQsldVnwjkdk2yB4dbHR5KF\njw0XOF+yo7Pk3lLxTYjT9qr9QdhTUPubi0j4hDQImcp+lBeh/btObyIrQ1/5FrMT\nn/B56yn3AgMBAAECggEAIzhPgNP+5QX3txoMuxxP7t82OOK0GuRy8NpN+cwYOWIn\n6Uu49E03c4Lzwu1heEYpOZOS3h72XP5duUoPcr6Wf0VBGRrxQvs34G+zXmGHxooi\nP5+7OpEJUxGM9GFXnRzp6ztzd2Y8pRughVA3/MqhiaBrnN6G0ISEt/mnbGJmPGE/\nj4jbfdS2jHVWvUPqXBHw/g4+crOruCXaaLty7B+io3QuV59iPih70kcUppYw5I8B\nIX9eXoCboH16gfq8n8TKSbeGtuw7TdtjNHv/1JA4n5B6SYLIwCdz3lIMO0NZ+i/N\nWsXvN6EdClDc2cs9IAIMl8C9dMQUPTsNxTN2bifCcQKBgQDoKfyU7JtJebfR8teF\n736rmEATEspRlJknjsk7sNXfxWcuU6yim/tqBiV6sj3h+da0fuOyD8A5A/OdAvl9\n+XMixEY8yxyY083upa37cvirzagqsJVc+5oVWd/H1Rq+S43qMuyOH32uelmDL5i5\np3HD6t2EuwuJTb+tPG8cMZX+RwKBgQDhTtk0Tl06TFewLyr0z0PS+bGA9jGV1poO\nQa0sRtC5Vpy/D1OgJRiyBHdbMi3mRXsGEzFWuZaT8muu9tHjo83j/nRHmcmCNOgx\n2qmNLnOA6PrnoBA1oTZ+MJZkrH8MCSY8SINPKDLYMZ9xgFwxHSio4Z410/x8qRzI\nIGIjdePe0QKBgCaQQtph6vFrfHMtSUuAGqRaJ9qDNoQSkNYXS6nUl9IRsi/pyjVA\nf6R+3N7imJDetSFKKnw7TYyq8V5VTif0tYFC5P/YJSnllMFdV+b6k//Fq3db2ZOW\nX2PIh/ljlouhdTM/vjdlV7URsaiu0UmVXLpUWvNfNm1aMsqNzU77lZSlAoGAEmLA\nzsfmS6+XKEVxF/Eh88F0frWYbkXI5IjvfMF6nuU2fVDe3h6o2T4MD2EU5cmdtG00\nhYM3inMp3mk9z3m6f3RwQLeH/hwbJpZVZ7P2sPpSHzyslfPF4p5MZ4K8C1tjx1+T\nd44sOAA0pqp223spqj5fDr1xySpzstERsRsZsUECgYBJABL9kAmsprLVSb+hXSeZ\na3dXyWv8uMO8VZc5nqukq7c8BmcqyyfcQfNr7/3W6nlx6DXDMZ1TPyH5AdcOyZ7k\ngm+GyFmzz7KiHIxFSCwuJqr8ouOPfdSGlxm9UeuhbAzqjIA4g7UQJrajkhjZmMTs\nhaJcnf5FpRw3n9gUzPFGQA==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-bv48i@test-coder-840cf.iam.gserviceaccount.com",
    client_id: "107086301525576024082",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bv48i%40test-coder-840cf.iam.gserviceaccount.com"
  },
  
  firebaseUrl: "https://url-example.firebaseio.com"
}

export default config;