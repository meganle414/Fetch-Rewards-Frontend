<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#Requirements">Requirements</a>
      <ul>
        <li><a href="#minimum-requirements">Minimum Requirements</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![Frontend Screen Shot](https://github.com/meganle414/Fetch-Rewards-Frontend/blob/main/images/frontend-screenshot.png?raw=true)

This project was created as my application for the Fetch Rewards Front End Take Home Exam.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project was built with

* JavaScript
* HTML
* CSS


<!-- REQUIREMENTS -->
## Requirements
The requirements were taken from [this link.](https://fetch-hiring.s3.amazonaws.com/frontend.html)

My task was to build a webpage with a user creation form. The form should take the following required inputs:

* Full Name
* Email
* Password
* Occupation
* State

Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:
```JSON
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```
You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:
```JSON
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
```
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.

### _Minimum_ Requirements

My site must:

* Display a form with inputs for each field outlined above
* Allow a user to complete and submit the form
* Do not allow form submission without completing the entire form
* Provide feedback upon successful form submission
* Have its soure code stored in a code repository
* Be hosted on the internet

I may complete this exercise using any languages or frameworks I'd like.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
