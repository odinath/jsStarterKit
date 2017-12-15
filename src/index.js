/* eslint-disable no-debugger */

import {deleteUserById, getUsers} from './api/userApi';
// import './index.css';

getUsers().then(result => {

    let usersBody = "";

    result.forEach(user => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}(</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`;
    });

    global.document.getElementById("users").innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');

    debugger;

    Array.from(deleteLinks, link => {
        link.onclick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUserById(element.attributes['data-id'].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });

});
