import React from 'react'
import $ from 'jquery';

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/nSuKvAsR3lOPJLvU/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}

export default SubForm;