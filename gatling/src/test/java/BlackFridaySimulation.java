import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.time.Duration;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class BlackFridaySimulation extends Simulation {

    HttpProtocolBuilder httpProtocol = http
        .baseUrl(System.getProperty(
            "baseUrl",
            "https://httpbin.org"
        ));

    ScenarioBuilder scenario = scenario("Shop Visitors")
        .exec(http("Homepage")
            .get("/")
            .check(status().is(200)))
        .pause(2)
        .exec(http("Products")
            .get("/products")
            .check(status().is(200)))
        .pause(3)
        .exec(http("Product Details")
            .get("/products/1")
            .check(status().is(200)));

    {
        setUp(
            scenario.injectOpen(
                rampUsers(20)
                    .during(Duration.ofSeconds(30))
            )
        ).protocols(httpProtocol);
    }
}
