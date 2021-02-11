let neo4j = require('neo4j-driver');
let { creds } = require("../config/credentials");
let driver = neo4j.driver("bolt://18.225.9.176/:7687", neo4j.auth.basic(creds.neo4jusername, creds.neo4jpw));

exports.get_num_nodes = async function () {
    let session = driver.session();
    const num_nodes = await session.run('match (n:topic{name:"Validity"})  return {name:n.name,subject:n.subject,degree:n.degree} as re', {
    });
    session.close();
    var list=[];
    // console.log("RESULT", (!num_nodes ? 0 : num_nodes.records[0]["_fields"][0]["name"]));
    for(i=0; i<num_nodes.records.length;i++)
    {
      list.push(num_nodes.records[i]["_fields"][0]);
    }
    // list=list.json().data;
    console.log(list)


    // console.log(num_nodes.records[0]._fields[]);
    return list;
};
exports.create_user = async function (name) {
    let session = driver.session();
    let user = "No User Was Created";
    try {
        user = await session.run('MERGE (n:user {name: $id}) RETURN n', {
            id: name
        });
    }
    catch (err) {
        console.error(err);
        return user;
    }
    return user.records[0].get(0).properties.name;
}
