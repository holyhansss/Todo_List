const calculator = {
    add: function(a, b){
        return a+b
    },
    sub: function(a, b){
        return (a-b)
    },
    div: function(a, b){
        return (a/b)
    },
    powerOf: function(a, b){
        return (a**b)
    },
    reminder: function(a,b){
        return (a%b)
    },
}


calculator.add(10,20);
calculator.sub(10,20);
calculator.div(10,20);
calculator.powerOf(10,20);
calculator.reminder(10,20);
