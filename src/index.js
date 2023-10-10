exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from your Lambda function!'),
    };
    return response;
};
