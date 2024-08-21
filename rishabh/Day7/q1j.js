
            var message = "Hello, World!";
            var count = 0;
            

            console.log("Initial message:", message);
            console.log("Initial count:", count);
            

            message = "JavaScript `var` is interesting!";
            count += 1;
            
        
            console.log("Updated message:", message);
            console.log("Updated count:", count);
            
          
            console.log("Hoisted value:", hoistedVar); // Undefined due to hoisting
            var hoistedVar = "I am hoisted!";
            console.log("After assignment:", hoistedVar); // "I am hoisted!"