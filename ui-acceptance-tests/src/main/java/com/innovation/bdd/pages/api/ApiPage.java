package com.innovation.bdd.pages.api;

import java.io.IOException;

import static com.jayway.restassured.RestAssured.*;




public class ApiPage {

    public void apiTime() throws IOException, InterruptedException

    {
        baseURI = "http://54.194.199.152/time" + port;
        port = 8888;

        given()
                .expect()
                .statusCode(200).get(baseURI);

    }

    public void apiCities() throws IOException, InterruptedException

    {
        baseURI = "http://54.194.199.152/api/cities" + port;
        port = 8888;

        given()
                .expect()
                .statusCode(200).get(baseURI);

    }

}
