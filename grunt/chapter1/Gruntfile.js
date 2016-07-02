module.exports = function(grunt) {
   
    //获取package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    
    grunt.registerTask('default',[]);
    
};
