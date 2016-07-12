package com.innovation.bdd.pages.api;

import java.io.IOException;

import static com.jayway.restassured.RestAssured.*;


public class ApiPage {

    public void apiTime() throws IOException, InterruptedException

    {


        given()
                .expect()
                .statusCode(200).get("http://54.194.199.152/time");

    }

    public void apiCities() throws IOException, InterruptedException

    {

        given()
                .expect()
                .statusCode(200).get("http://54.194.199.152/api/cities" );


    }

}
