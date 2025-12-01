function generateTemId(){
    const randomPart = Math.random().toString(36).substring(2,8)
    return randomPart.toUpperCase();
}

const orderId = generateTemId();
console.log(`ID order:${orderId}`);
