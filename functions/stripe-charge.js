const stripe = require('stripe')('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')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}