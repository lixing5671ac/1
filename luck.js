
/**
 * �滻url���滻����header һ��2��������
 */

const url = `�滻1 url��https://��ͷ������url`;
const method = `POST`;
const headers = {
 
 �滻2 ����header 
 
 
};
const body = `{"task_id" : "225"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
