exports.handler = async function(event, context) {
    const { name, score } = JSON.parse(event.body);

    // Here you would typically save the data to a database
    // For simplicity, we'll use a global array (not persistent)
    if (!global.scores) {
        global.scores = [];
    }
    global.scores.push({ name, score: parseInt(score) });

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
    };
};