$(document).ready(function() {
    var automobiledata = [];



    $("#enter-data").fadeIn(1000);
    $("#test-data").fadeIn(1000);
    $("#city-carbon-footprint").fadeIn(1000);
    $("#generate").fadeIn(1000);
    $("#download").fadeIn(1000);


    $("#test-data").click(function() {

        automobiledata = [];


        var modelstore = ["zenvo st1", "ferrari laferrari", "pagani huayra", "aston martin one-77", "koenigsegg one:1", "ferrari f60 america", "mansory vivere bugatti veyron", "w motors lykan hypersport", "lamborghini veneno", "koenigsegg ccxr trevita"];
        var carbonfootprintstore = [.01, .02, .03, .04, .05, .06, .07, .08, .09];

        for (var i = 0; i < 1000; i++) {
            automobiledata.push({
                "id": (i + 1) + "",
                "model": modelstore[Math.floor(Math.random() * modelstore.length)],
                "year-of-purchase": Math.floor((Math.random() * 20) + 2000) + "",
                "price": Math.floor((Math.random() * 10) + 1) + "m",
                "carbon-footprint-per-day": carbonfootprintstore[Math.floor(Math.random() * carbonfootprintstore.length)]


            });


        }



        $("#enter-data").val(JSON.stringify(automobiledata));




    });

    $("#generate").click(function() {

        automobiledata = JSON.parse($("#enter-data").val());

        

        var desiredcityautomobilecarbonfootprint = $("#city-carbon-footprint").val();
        var total = 0.0;
        var sum = 0.0;
        var reduction;

        var carids = [];

        for (var i = 0; i < automobiledata.length; i++) {
            sum += automobiledata[i]["carbon-footprint-per-day"];

        }




        while (true) {

            var carid = Math.floor(Math.random() * ((automobiledata.length - 1) - 0 + 1)) + 0;
            if (automobiledata[carid]["carbon-footprint-per-day"] + total < desiredcityautomobilecarbonfootprint) {

                if (carids.indexOf((carid + 1) + "") == -1) {
                    total += automobiledata[carid]["carbon-footprint-per-day"];
                    carids.push((carid + 1) + "");

                }

            } else {

                break;
            }

        }

        reduction = ((sum - total) / sum) * 100.0;
        carids.sort();


        $("#download").text("Calculated total daily carbon footprint for the generated combination is: " + total.toFixed(2) + " co2 tons. Reduction: " + reduction.toFixed(2) + "%. Download selected car ids ...").off("click").click(function() {

            var fileBlob = new Blob([carids.join("\r\n")], {
                type: "application/octet-binary"
            });

            var link = document.createElement("a");
            link.setAttribute("href", URL.createObjectURL(fileBlob));
            link.setAttribute("download", "selected-car-ids.txt");
            link.appendChild(document.createTextNode("Save file"));
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();

        });


    });



});
