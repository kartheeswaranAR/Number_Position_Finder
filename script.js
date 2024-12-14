
function findnumberPosition()
{
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const usr_input = parseInt(document.getElementById('usr_input').value)
    // console.log(usr_input)
    // console.log(arr)

    if (isNaN(usr_input) || usr_input <= 0) {
        document.getElementById('result').innerText = "Please enter a valid number!";
        return;
    }

    for (let i =0; i<arr.length; i++)
    {
        for (let j = i+1; j<arr.length; j++)
        {
            if (arr[i] + arr[j] == usr_input)
            {
                document.getElementById('result').innerText = 
                    `Index: [${i}, ${j}] || Values: [${arr[i]}, ${arr[j]}]`;
                return ;
            }
            else
            {
                document.getElementById('result').innerHTML = `Given value ${usr_input} is not correct !`
            }
        }
    }
    return null
}


function resetFields() {
    document.getElementById('usr_input').value = "";
    document.getElementById('result').innerText = "Index: [0, 0] || value: [0, 0]"; 
}

// functio  n findnumberPosition()
// {
//     const arr = [1,2,3,4,5,6,7,8,9,10]
//     const usr_input = parseInt(document.getElementById('usr_input').value)
//     for (let i=0; i<arr.length;i++)
//     {
//         for (let j=i+1; j=arr.length; j++)
//         {
//             if(arr[i]+arr[j] === usr_input)
//             {
//                 let x = document.getElementById('result').innerHTML = `Index: [${i}, ${j}], Value: [${arr[i]}, ${arr[j]}]`;
//                 console.log(x)
//                 return x;
//                 //console.log(`Index: [${i}, ${j}], Value: [${arr[i]}, ${arr[j]}]`)
//             }

//         }
//     }
//     return null
// }


// console.log("Checked")
//document.getElementById('usr_input').value
// const usr_input = 7
// const result = findnumberPosition()
// console.log(result)

// // const index_num = document.getElementById('index_num')
// console.log(result.Index)
// console.log(result.Value)
// //index_num.textContent = `Index: ${result.Index}`

// let value_num = document.getElementById('value_num')
// value_num.textContent = `Value: ${result.Value}`