## CACFRM

On sept. 27, 2013 the Intergovernmental Panel on Climate Change (IPCC) published an important report that underlined [the role of human activities](https://www.livescience.com/37057-global-warming-effects.html) in global warming. The ice sheets near north and south poles are [melting](https://www.livescience.com/40021-ipcc-climate-change-report-reactions.html) at an ever-increasing pace. The sea level is rising. Many islands are going [under the sea](https://www.theguardian.com/environment/2016/may/10/five-pacific-islands-lost-rising-seas-climate-change). On May 29, 2018, reader's digest published a report on [13](https://www.rd.com/advice/travel/islands-will-disappear-80-years/) islands that will disappear in eight decades.  The Independent published an article around the same time that mentioned the strong possibility of [thousands of islands](https://www.independent.co.uk/environment/islands-sea-level-rise-flooding-uninhabitable-climate-change-maldives-seychelles-hawaii-a8321876.html) becoming uninhabitable in a few decades. Global warming has [detrimental effects](https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health) on our health too. The "social and environmental determinants of health" get severely affected. From 2030 to 2050, it is "expected to cause approximately 250 000 additional deaths per year." 

Many of our activities contribute significantly toward global warming. One of those activities is automobile use. Cars have a huge carbon footprint. Automobile use is responsible for over [30%](https://usinsuranceagents.com/everything-you-need-know-about-your-cars-carbon-footprint) of the annual co2 emissions in the US. Each mile we drive in a car slowly kills our stunning planet. Cars have other issues too. Everyone taking their cars to the road in the morning results in congestion. In the US congestion is responsible for [hundreds of billions of dollars](https://www.citylab.com/transportation/2018/02/traffics-mind-boggling-economic-toll/552488/) in productivity losses and other losses. Congestion also puts stress on the drivers and passengers. If we look at a gridlock, it feels as if each car is a moving prison and the people inside are inmates. People going to their workplaces alone in their cars often results in increased social stress. It is not uncommon for two persons who live in the same neighborhood, work in nearby offices, and at the same time to talk occasionally or never due to the burden of busy urban life. Happiness is created when people spend time together. [CACFRM](https://cacfrm.glitch.me) is a mobility open blockchain initiative-powered solution that aims to reduce the total carbon footprint of automobiles in a city, while indirectly addressing congestion problem and fostering community development. 

To test the app, please visit, [cacfrm.glitch.me](https://cacfrm.glitch.me). Please wait a few seconds as the app loads. The city administrator will enter the automobile data. For testing purposes, you can press the use test automobile data ... button to load test data of 1000 cars. Alternately, you can provide your own data that is properly formatted (see below). 

```
[{"id":"1","model":"w motors lykan hypersport","year-of-purchase":"2010","price":"6m","carbon-footprint-per-day":0.09},
```

```
...
```

```
{"id":"998","model":"koenigsegg one:1","year-of-purchase":"2013","price":"1m","carbon-footprint-per-day":0.08},
```

```
{"id":"999","model":"ferrari laferrari","year-of-purchase":"2000","price":"5m","carbon-footprint-per-day":0.04},
```

```
{"id":"1000","model":"lamborghini veneno","year-of-purchase":"2009","price":"1m","carbon-footprint-per-day":0.08}]
```

The automobile data can be sourced from blockchain. The data needs to be JSON formatted. Each automobile in the city will have an id, model name, year of purchase, price, and carbon footprint per day (measured in co2 tons). In the test data, model name is randomly selected from an array of model names, year of purchase ranges from 2000 to 2019, price ranges from 1m to 10m, carbon footprint per day ranges from .01 to .09 in steps of .01. Then you need to enter the desired city automobile carbon footprint, for instance, 12.5. When you press the generate environment-friendly automobile combination ... button the app will generate an automobile combination by randomly selecting cars from all the cars in the city while ensuring total carbon footprint is under the desired value. the app will display the total carbon footprint for the generated combination, the reduction achieved as compared to the total city automobile carbon footprint i.e. the carbon footprint if all the cars went out on the road. The app lets you download the ids of the selected cars. The owners of those cars can then notified. People whose cars are not selected will reach their workplace by getting into a selected car on the road. In addition to reducing the total carbon footprint of a city, the app will also help in reducing congestion as fewer cars mean fewer jams. By spending time together in the cars on the road, people will get to know each other and develop lifelong friendships. Built on clean and robust web technologies, the app will inspire urban mass to contribute to a cleaner and greener planet. 