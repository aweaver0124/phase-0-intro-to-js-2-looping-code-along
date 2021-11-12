const recipient = [];

function writeCards(recipient, event) {
    for (let i = 0; i < recipient.length; i++) {

        recipient.splice(i, 1, `Thank you, ${recipient[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return recipient
}
writeCards(["Tom", "Maddi", "Trace"], "Christmas");


function countDown(x) {
    while (x >= 0) {
        console.log(x--)
    }
  }