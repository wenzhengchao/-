const path=require('path');
const htmlwebpackplugin=require('html-webpack-plugin');
const Vueloaderplugin=require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./main.js'),
    output:{
        path:path.join(__dirname,'./'),
        filename:'ma.js'
    },
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,'./index.html'),
            filename:'index.html'
        }),
        new Vueloaderplugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}