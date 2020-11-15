'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000
    });

    const k8s = require('@kubernetes/client-node');

    const cthai = new k8s.KubeConfig();
    cthai.loadFromFile('./thai.yaml')

    const ckorea = new k8s.KubeConfig();
    ckorea.loadFromFile('./korea.yaml')

    const cmalay = new k8s.KubeConfig();
    cmalay.loadFromFile('./malay.yaml')

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const k8sApiCthai = cthai.makeApiClient(k8s.CoreV1Api);
    const k8sApiCkorea = ckorea.makeApiClient(k8s.CoreV1Api);
    const k8sApiCmalay = cmalay.makeApiClient(k8s.CoreV1Api);

    server.route([
        {
            path: "/",
            method: "GET",
            handler: () => "Hello World!"
        },
        {
            path: "/thai/create",
            method: "GET",
            handler: () => createpod(k8sApiCthai, "default")
        },
        {
            path: "/korea/create",
            method: "GET",
            handler: () => createpod(k8sApiCkorea, "default")
        },
        {
            path: "/malay/create",
            method: "GET",
            handler: () => createpod(k8sApiCmalay, "default")
        },
        {
            path: "/thai/delete",
            method: "GET",
            handler: () => deletepod(k8sApiCthai, "default")
        },
        {
            path: "/korea/delete",
            method: "GET",
            handler: () => deletepod(k8sApiCkorea, "default")
        },
        {
            path: "/malay/delete",
            method: "GET",
            handler: () => deletepod(k8sApiCmalay, "default")
        },
        {
            path: "/thai/list",
            method: "GET",
            handler: () => listpod(k8sApiCthai, "default")
        },
        {
            path: "/korea/list",
            method: "GET",
            handler: () => listpod(k8sApiCkorea, "default")
        },
        {
            path: "/malay/list",
            method: "GET",
            handler: () => listpod(k8sApiCmalay, "default")
        }
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

const podtemplate = {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
        "name": "nginx-deployment2"
    },
    "spec": {
        "containers": [
            {
                "name": "nginx",
                "image": "nginx:1.14.2",
                "ports": [
                    {
                        "containerPort": 80,
                        "hostPort": 34000
                    }
                ],
                "resources": {
                    "limits": {
                        "cpu": "1",
                        "memory": "1Gi"
                    },
                    "requests": {
                        "cpu": "500m",
                        "memory": "512Mi"
                    }
                }
            }
        ]
    }
}

const createpod = (api, namespace) => api.createNamespacedPod(namespace, podtemplate)
    .then((res) => {
        return res.body;
    })
    .catch((error) => {
        console.log(error)
        return "Error: "+error.response.body;
    })

const deletepod = (api, namespace) => api.deleteNamespacedPod('nginx-deployment2', namespace)
    .then((res) => {
        return res.body;
    })
    .catch((error) => {
        console.log(error.response.body)
        return "Error: "+error.response.body;
    })

const listpod = (api, namespace) => api.listNamespacedPod(namespace)
    .then((res) => {
        return res.body;
    })
    .catch((error) => {
        return "Error: "+error.response.body;
    })