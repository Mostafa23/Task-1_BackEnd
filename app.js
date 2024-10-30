const fs = require("fs")
const yargs = require("yargs")
const data10 = require("./data10")

yargs.command({
   command: "?",
   describe: "information about the app",
   handler: () => {
      console.log("add --id='' --fname='' --lname='' --age='' --city=''")
      console.log("delete --id= <delete id only> or delete <all data>");
      console.log("search --id= <search by id only> or search <all data>");
      console.log("--------------------------------------------------------");
   }
})

yargs.command({
    command: "add",
    describe: "Add a person",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "First name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "Last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "Age",
            demandOption: true,
            type: "number"
        },
        city: {
            describe: "City",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    }
})

yargs.command({
    command: "delete",
    describe: "Delete a person",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: false,
            type: "number"
        }
    },
    handler: (x) => {
        if (x.id) {
            data10.deleteData(x.id)
        } else {
            data10.deleteAllData()
        }
    }
})

yargs.command({
    command: "search",
    describe: "search a person's data",
    builder: {
        id: {
            describe: "Person ID",
            demandOption: false,
            type: "number"
        }
    },
    handler: (x) => {
        if (x.id) {
         data10.searchData(x.id)
      } else {
         data10.searchAllData()
      }
    }
})


yargs.parse()
