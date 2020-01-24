const express = require('express');
const router = express.Router();

//Handle incoming GEt requests to /orders

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'Orders were fetched'
    });
});

//Handle incoming POST requests to /orders

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(200).json({
        msg: 'Order was created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 'special') {
        res.status(200).json({
            msg: 'You discovered the secret ID'
        })
    } else {
        res.status(200).json({
            msg: 'FAIL!!'
        })
    }
});

module.exports = router;