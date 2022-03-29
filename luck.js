
/**
 * 替换url，替换整个header 一共2处！！！
 */

const url = `替换1 url，https://开头的整个url`;
const method = `POST`;
const headers = {
 
 替换2 整个header 
 
 
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
