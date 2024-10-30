const fs = require("fs")
const file_path = "data10.json"

const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo()

    if (allData.length == 9) {
        console.log("ERROR: Max Person")
        return
    } 

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    });

    if (duplicatedData.length === 0) {
        allData.push({ id, fname, lname, city, age })
        saveAllData(allData)
        console.log("Person added successfully!")
    } else {
        console.log("ERROR: Duplicated ID")
    }
}

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync(file_path).toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync(file_path, saveAllDataJson)
}

const deleteData = (id) => {
    const allData = loadInfo()
    length = allData.length
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    });
    if (dataToKeep.length !== length) {
        saveAllData(dataToKeep)
        console.log(`Person with ID ${id} deleted successfully!`)
    } else {
        console.log("ERROR: ID not found")
    }
};

const deleteAllData = () => {
    fs.writeFileSync(file_path, JSON.stringify([]))
    console.log("All data deleted successfully!")
}

const searchData = (id) => {
    const allData = loadInfo()

    const itemNeeded = allData.find((obj) => {
        return obj.id === id
    })

    if (itemNeeded) {
        console.log(itemNeeded)
    } else {
        console.log("ERROR: ID not found")
    }
}


const searchAllData = () => {
    const allData = loadInfo()

    if (allData.length > 0) {
        allData.forEach((obj) => {
            console.log(`ID: ${obj.id}, Name: ${obj.fname} ${obj.lname}, Age: ${obj.age}, City: ${obj.city}`)
        })
    } else {
        console.log("No data available.")
    }
}

module.exports = {
    addPerson,
    deleteData,
    deleteAllData,
    searchData,
    searchAllData
}
