//1st 100---100;
//101-200--90;
//200+-----70;

function ticketFun(ticket)
{
    if (ticket<=100) {
        const One_ticket=100;
        const price = ticket*One_ticket;
        return price
    }
    if (ticket>100&&ticket<=200) {
        const priviousPrice = 100*100;
        const restTicket = ticket-100;
        const price = (restTicket*90)+priviousPrice;
        return price;

    }
    if (ticket>200) {
        const First_PreviousPrice = 100*100;
        const secondRestTicket = 200-100;
        const secondPrevious = (secondRestTicket*90);
        const rest = ticket-200;
        const price= (rest*70)+secondPrevious+First_PreviousPrice
        return price;
    }

}
const ticket = ticketFun(201)
console.log(ticket);