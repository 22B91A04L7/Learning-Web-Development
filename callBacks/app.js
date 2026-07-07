const FakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        console.log(delay);
        if (delay < 3000) {
            success(`Url found successdully!!! ${url}`);
        } else {
            failure(`error .. url not found..! ${url}`);
        }
    }, delay);
};

// FakeRequestCallback(
//     "book.com",

//     (response) => {
//         console.log("call back successful");
//         console.log(response);

//         FakeRequestCallback(
//             "book.com/page1",

//             (response) => {
//                 console.log("call back successful for page 1");
//                 console.log(response);

//                 FakeRequestCallback(
//                     "book.com/page2",

//                     (response) => {
//                         console.log("call back successful for page 2");
//                         console.log(response);
//                     },
//                     (err) => {
//                         console.log("call back failed for page 2", err);
//                     },
//                 );
//             },
//             (err) => {
//                 console.log("call back failed for page 1", err);
//             },
//         );
//     },
//     //failure call back
//     (err) => {
//         console.log("call back failed", err);
//     },
// );
