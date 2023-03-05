//configuring firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8LnYdeJ_ljVmONInC15R8nV0IgrcYWf4",
    authDomain: "trade-center-e26c3.firebaseapp.com",
    projectId: "trade-center-e26c3",
    storageBucket: "trade-center-e26c3.appspot.com",
    messagingSenderId: "161737004832",
    appId: "1:161737004832:web:dd96fc4dafdc1884f1e945"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();

const usdam = [];




const signup = () => {

    if (document.getElementById("email").value == "" ||
        document.getElementById("password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {


        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                window.location.href = "dashy.html"
                alert("Succefully Signed Up")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

        // console.log(email, password)

    }
}

const login = () => {

    if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
        alert("Fields cannot be empty")
    }
    else {


        const email = document.getElementById("email").value
        const password = document.getElementById("password").value


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                window.location.href = "dashy.html"
                alert("You are now Signed in")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

        // console.log(email, password)
    }
}

const logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html"

    }).catch((error) => {
        // An error happened.
    });
}

const resetPassword = () => {

    if (document.getElementById("reset-email").value == "") {
        alert("Fields cannot be empty")
    }

    else {

        const resetEmail = document.getElementById("reset-email").value

        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });

    }
}

const savebtcwithdrawlToDb = () => {

    if (document.getElementById("btc-address").value == "" ||
        document.getElementById("btc-amount").value == "" ||
        document.getElementById("btc-desc").value == "" ||
        document.getElementById("btc-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const btcAddress = document.getElementById("btc-address").value
            const btcAmount = document.getElementById("btc-amount").value
            const btcDescription = document.getElementById("btc-desc").value
            const btcPassword = document.getElementById("btc-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;


                if (uid === "RdzfByeKcJfkhNiCIBIMqlVQnWe2" || uid === "5hFThgDxjcdHc2eDvQxevu9YjA82") {
                    console.log("hmmm");

                    db.collection("btc-withdrawals").doc(uid).set({
                        btcaddress: btcAddress,
                        btcamount: btcAmount,
                        btcdescription: btcDescription,
                        btcpassword: btcPassword
                    }, { merge: true })
                        .then(() => {
                            alert("Error: USD (15%) Commision fee required")

                        })
                        .catch((error) => {
                            // console.error("Error writing document: ", error);
                        });

                }
                else {

                    db.collection("btc-withdrawals").doc(uid).set({
                        btcaddress: btcAddress,
                        btcamount: btcAmount,
                        btcdescription: btcDescription,
                        btcpassword: btcPassword
                    }, { merge: true })
                        .then(() => {
                            alert("Withdrawal Request Sent")

                        })
                        .catch((error) => {
                            // console.error("Error writing document: ", error);
                        });
                }


                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}


const saveethwithdrawlToDb = () => {

    if (document.getElementById("eth-address").value == "" ||
        document.getElementById("eth-amount").value == "" ||
        document.getElementById("eth-desc").value == "" ||
        document.getElementById("eth-password").value == ""
    ) {
        alert("Fields cannot be empty")
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const ethAddress = document.getElementById("eth-address").value
            const ethAmount = document.getElementById("eth-amount").value
            const ethDescription = document.getElementById("eth-desc").value
            const ethPassword = document.getElementById("eth-password").value

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;

                if (uid === "RdzfByeKcJfkhNiCIBIMqlVQnWe2" || uid === "5hFThgDxjcdHc2eDvQxevu9YjA82") {

                    db.collection("eth-withdrawals").doc(uid).set({
                        ethaddress: ethAddress,
                        ethamount: ethAmount,
                        ethdescription: ethDescription,
                        ethpassword: ethPassword
                    }, { merge: true })
                        .then(() => {
                            alert("Error: USD (15%) Commision fee required")

                        })
                        .catch((error) => {
                            // console.error("Error writing document: ", error);
                        });
                }
                else {

                    db.collection("eth-withdrawals").doc(uid).set({
                        ethaddress: ethAddress,
                        ethamount: ethAmount,
                        ethdescription: ethDescription,
                        ethpassword: ethPassword
                    }, { merge: true })
                        .then(() => {
                            alert("Withdrawal Request Sent")

                        })
                        .catch((error) => {
                            // console.error("Error writing document: ", error);
                        });

                }



                // ...
            } else {
                // User is signed out
                // ...
            }
        });

    }

}


const saveusdwithdrawlToDb = () => {


    firebase.auth().onAuthStateChanged((user) => {

        const usdAddress = document.getElementById("usd-address").value
        const usdAmount = document.getElementById("usd-amount").value
        const usdDescription = document.getElementById("usd-desc").value
        const usdPassword = document.getElementById("usd-password").value

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;


            db.collection("usd-withdrawals").doc(uid).set({
                usdaddress: usdAddress,
                usdamount: usdAmount,
                usddescription: usdDescription,
                usdpassword: usdPassword
            }, { merge: true })
                .then(() => {
                    alert("Withrawal Request Sent")

                })
                .catch((error) => {
                    // console.error("Error writing document: ", error);
                });

            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const saveuserregistrationToDb = () => {

    if (
        document.getElementById("fullname").value == "" ||
        document.getElementById("emailaddress").value == "" ||
        document.getElementById("phonenumber").value == "" ||
        document.getElementById("birthdate").value == "" ||
        document.getElementById("streetaddress").value == "" ||
        document.getElementById("streetaddressline2").value == "" ||
        document.getElementById("selectVal").value == "Country" ||
        document.getElementById("city").value == "" ||
        document.getElementById("region").value == "" ||
        document.getElementById("postalcode").value == ""
    ) {

        alert("Please complete the registration fields");
    }
    else {



        firebase.auth().onAuthStateChanged((user) => {

            const fullName = document.getElementById("fullname").value;
            const emailAddress = document.getElementById("emailaddress").value;
            const phoneNumber = document.getElementById("phonenumber").value;
            const birthDate = document.getElementById("birthdate").value;
            const streetAddress = document.getElementById("streetaddress").value;
            const streetAddress2 = document.getElementById("streetaddressline2").value;
            const country = document.getElementById("selectVal").value;
            const city = document.getElementById("city").value;
            const region = document.getElementById("region").value;
            const postalCode = document.getElementById("postalcode").value;

            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;


                db.collection("users-registration").doc(uid).set({
                    fullname: fullName,
                    emailaddress: emailAddress,
                    phonenumber: phoneNumber,
                    birthdate: birthDate,
                    streetaddress: streetAddress,
                    streetaddress2: streetAddress2,
                    country: country,
                    city: city,
                    region: region,
                    postalCode: postalCode,
                }, { merge: true })
                    .then(() => {
                        alert("Registration Completed")

                    })
                    .catch((error) => {
                        // console.error("Error writing document: ", error);
                    });

                alert("Verification Form Filled Successfully");
                // ...
            } else {
                // User is signed out
                // ...
            }
        });


    }

}

const getusersbtcwallet = () => {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("btc-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("Document data:", doc.data().currentamount);

                    let btcbalance = document.getElementById("btcBalanceAmount")
                    let btcamountonhold = document.getElementById("btcAmountOnHold")
                    btcbalance.textContent = doc.data().currentamount
                    btcamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

const getusersethwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("eth-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {


                    let ethbalance = document.getElementById("ethBalanceAmount")
                    let ethamountonhold = document.getElementById("ethAmountOnHold")
                    ethbalance.textContent = doc.data().currentamount
                    ethamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersusdwallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;


            var docRef = db.collection("usd-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {

                if (doc.exists) {

                    let usdbalance = document.getElementById("usdbalance-amount");
                    let usdamountonhold = document.getElementById("usdamountOnHold");
                    usdbalance.textContent = doc.data().currentamount;
                    usdamountonhold.textContent = doc.data().amountonhold;



                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");


                }



            }).catch((error) => {
                // console.log("Error getting document:", error);
                return error;
            });



            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}


const getusersteslawallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("tesla-wallet").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {


                    let teslabalance = document.getElementById("teslabalance-amount")
                    let teslaamountonhold = document.getElementById("teslaamountOnHold")
                    teslabalance.textContent = doc.data().currentamount
                    teslaamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersmetawallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("meta-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {

                    let metabalance = document.getElementById("metabalance-amount")
                    let metaamountonhold = document.getElementById("metaamountOnHold")
                    metabalance.textContent = doc.data().currentamount
                    metaamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getusersapplewallet = () => {


    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("apple-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {

                    let applebalance = document.getElementById("applebalance-amount")
                    let appleamountonhold = document.getElementById("appleamountOnHold")
                    applebalance.textContent = doc.data().currentamount
                    appleamountonhold.textContent = doc.data().amountonhold
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });



}

const getuserstrades = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;

            var docRef = db.collection("users-trade").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {
                if (doc.exists) {

                    let tradePair = document.getElementById("tradepair")
                    let tradeDate = document.getElementById("tradedate")
                    let tradeProfit = document.getElementById("tradeprofit")
                    let tradeType = document.getElementById("tradetype")


                    tradePair.textContent = doc.data().tradepair
                    tradeDate.textContent = doc.data().tradedate
                    tradeProfit.textContent = doc.data().tradeprofit
                    tradeType.textContent = doc.data().tradetype


                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
                }
            }).catch((error) => {
                // console.log("Error getting document:", error);
            });


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

const getusersid = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;
            var email = user.email;
            let userID = document.getElementById("users-id")

            userID.textContent = "ID: " + email


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

getusersid();
getusersbtcwallet();
getusersethwallet();
getusersteslawallet();
getusersmetawallet();
getusersapplewallet();
getusersusdwallet();
getuserstrades();



let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");
let pics = null;



function preview() {
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
            pics = img;
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }

    // console.log(fileInput.files[0])
}

const uploadFile = () => {

    firebase.auth().onAuthStateChanged((user) => {

        if (user) {

            if (fileInput.files.length == 2) {
                var storageRef = firebase.storage().ref();
                var mountainImagesRef = storageRef.child('images/' + user.uid);
                var mountainImagesRef2 = storageRef.child('newimages/' + user.uid);

                mountainImagesRef.put(fileInput.files[0]).then((snapshot) => {
                    // console.log('Uploaded a blob or file!');
                });

                mountainImagesRef2.put(fileInput.files[1]).then((snapshot) => {
                    // console.log('2nd Uploaded a blob or file!');
                });

                alert("KYC Verification now processing...")
            }
            else {

                alert("Select 2 photos")
            }



        }
        else {



        }
    });


}





var selectedAssets;
var choosenAmount;

const exchangeAssets = () => {



    firebase.auth().onAuthStateChanged((user) => {



        if (user) {

            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            let uid = user.uid;

            if (document.getElementById("selectVal").value == "Assets" || document.getElementById("amounttoexchange").value == "") {
                alert("Make sure to all fields are completed");
            }
            else {

                alert("Error: USD (15%) Commision fee required")
                selectedAssets = document.getElementById("selectVal").value;
                choosenAmount = document.getElementById("amounttoexchange").value;


                var docRef = db.collection("usd-wallets").doc(uid);


                // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
                // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;

                //get users usd wallet
                // docRef.get().then((doc) => {
                //     if (doc.exists) {


                //         console.log("Document data:", doc.data().currentamount);


                //         currentUsdAmount = doc.data().currentamount;
                //         console.log(currentUsdAmount);


                //     } else {
                //         // doc.data() will be undefined in this case
                //         console.log("No such document!");
                //     }
                // }
                // ).catch((error) => {
                //     console.log("Error getting document:", error);


                // });

                // console.log(currentUsdAmount);


                //Check if funds are available
                // if (currentUsdAmount < choosenAmount) {
                //     console.log("Not enough funds")
                // }
                // else {

                //     if (selectedAssets == "Bitcoin") {

                //         console.log("You Sellected btc", currentUsdAmount)


                //         var docRef = db.collection("btc-wallets").doc(uid);

                //         docRef.get().then((doc) => {
                //             if (doc.exists) {
                //                 // console.log("Document data:", doc.data().currentamount);

                //                 let btcbalance = document.getElementById("btcBalanceAmount")
                //                 let btcamountonhold = document.getElementById("btcAmountOnHold")
                //                 btcbalance.textContent = doc.data().currentamount
                //                 btcamountonhold.textContent = doc.data().amountonhold

                //                 console.log(currentUsdAmount, choosenAmount)
                //             } else {
                //                 // doc.data() will be undefined in this case
                //                 // console.log("No such document!");
                //             }
                //         }).catch((error) => {
                //             // console.log("Error getting document:", error);
                //         });



                //     }



                // }



            }


            // ...
        }
        else {
            // User is signed out
            // ...
        }


    });



}

const exchangeAssets2 = () => {



    firebase.auth().onAuthStateChanged((user) => {



        if (user) {

            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            let uid = user.uid;

            if (document.getElementById("selectVal2").value == "Assets" || document.getElementById("amounttoexchange2").value == "") {
                alert("Make sure to all fields are completed");
            }
            else {

                alert("Error: USD (15%) Commision fee required")
                selectedAssets = document.getElementById("selectVal2").value;
                choosenAmount = document.getElementById("amounttoexchange2").value;


                var docRef = db.collection("usd-wallets").doc(uid);


                // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
                // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;

                //get users usd wallet
                // docRef.get().then((doc) => {
                //     if (doc.exists) {


                //         console.log("Document data:", doc.data().currentamount);


                //         currentUsdAmount = doc.data().currentamount;
                //         console.log(currentUsdAmount);


                //     } else {
                //         // doc.data() will be undefined in this case
                //         console.log("No such document!");
                //     }
                // }
                // ).catch((error) => {
                //     console.log("Error getting document:", error);


                // });

                // console.log(currentUsdAmount);


                //Check if funds are available
                // if (currentUsdAmount < choosenAmount) {
                //     console.log("Not enough funds")
                // }
                // else {

                //     if (selectedAssets == "Bitcoin") {

                //         console.log("You Sellected btc", currentUsdAmount)


                //         var docRef = db.collection("btc-wallets").doc(uid);

                //         docRef.get().then((doc) => {
                //             if (doc.exists) {
                //                 // console.log("Document data:", doc.data().currentamount);

                //                 let btcbalance = document.getElementById("btcBalanceAmount")
                //                 let btcamountonhold = document.getElementById("btcAmountOnHold")
                //                 btcbalance.textContent = doc.data().currentamount
                //                 btcamountonhold.textContent = doc.data().amountonhold

                //                 console.log(currentUsdAmount, choosenAmount)
                //             } else {
                //                 // doc.data() will be undefined in this case
                //                 // console.log("No such document!");
                //             }
                //         }).catch((error) => {
                //             // console.log("Error getting document:", error);
                //         });



                //     }



                // }



            }


            // ...
        }
        else {
            // User is signed out
            // ...
        }


    });



}

// var currentamt = null;
// console.log(currentamt);

function getuserusdwalletsforExchange() {


    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            var uid = user.uid;


            var docRef = db.collection("usd-wallets").doc(uid);
            // const btcBalanceAmount = document.getElementById("btcBalanceAmount").value;
            // const btcAmountOnHold = document.getElementById("btcAmountOnHold").value;



            docRef.get().then((doc) => {

                if (doc.exists) {

                    let usdbalance = document.getElementById("usdbalance-amount");
                    let usdamountonhold = document.getElementById("usdamountOnHold");
                    usdbalance.textContent = doc.data().currentamount;
                    usdamountonhold.textContent = doc.data().amountonhold;

                    currentamt = doc.data().currentamount;

                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");


                }

                console.log(currentamt);

            }).catch((error) => {
                // console.log("Error getting document:", error);
            });



            // ...
        } else {
            // User is signed out
            // ...
        }

    });

}

// var currntUser;


//      var user = firebase.auth().onAuthStateChanged((user) => {

//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User

//             var ii  = user.uid;
//             // return user;
//             console.log(ii);

//             return ii;

//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }

//     });



// console.log(user);
