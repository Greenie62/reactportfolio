const {GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLObjectType} = require('graphql');

const fetchJson = require('../utils/fetchJson')
const fetchJsonItem = require('../utils/fetchJsonItem')


const FoodType = new GraphQLObjectType({
    name:"Food",
    fields:()=>({
        name:{type:GraphQLString},
        price:{type:GraphQLInt},
        quantity:{type:GraphQLInt},
        image:{type:GraphQLString},
    })
})



const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        foods:{
            type:new GraphQLList(FoodType),
      async resolve(parent,args){
                return await fetchJson()
            }
        },
        
        food:{
            type:FoodType,
            args:{
                name:{type:GraphQLString}
            },
            async resolve(parent,args){
                return await fetchJsonItem(args.name)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})