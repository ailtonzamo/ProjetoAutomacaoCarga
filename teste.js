import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 500 }, // Ramp-up para 500 usuários em 1 minuto
        { duration: '3m', target: 500 }, // Mantém 500 usuários por 3 minutos
        { duration: '1m', target: 0 },   // Ramp-down para 0 usuários em 1 minuto
    ],
};

export default function () {
    let url = 'https://jsonplaceholder.typicode.com/posts'; // API de mock para exemplo
    let payload = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.post(url, payload, params); // Requisição POST
    
    if (res.status !== 201) {
        console.error(`Erro: ${res.status}`);
    }
    sleep(1); // Pausa de 1 segundo entre requisições
}
