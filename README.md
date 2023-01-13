# SoQuo

## Overview

Imagine this: you’re part of a household of students that are seeking to decrease and save on your electricity bill. As a result, all of you turn towards solar technology and look for the best contractors and the best type of panels for your household. Unfortunately, even though you contact multiple contractors and research new solar systems, you realize that all the information is scattered and not consolidated in an effective manner, and there is no guidance on what contractors will be the most effective in fulfilling your needs.

SoQuo is a web application that compares an individual's current household using conventional power consumption methods to a model that uses solar power. The application will then inform the user about SoQuo’s 3 pillars: costs and savings, the green impact, and the suitability index. Finally, the application will also link the user to nearby contractors. Thus, SoQuo consolidates all of this information and feature set into one streamlined product for all.

## Solution Details:

Details of our solution include: Our tech stack is: React, NextJS, NodeJS and Firebase Firestore. The frameworks that we used are: NodeJS, NextJS and ReactJS. The main programming language is JavaScript. We deployed our service on Vercel.  

## Architecture Diagram:

## Key Technical Components:

#### Algorithms: Cost & Savings

For the algorithms used for each of the pillars, it can be seen below:

For cost and savings, we use the following formula in order to calculate the breakeven cost: The breakeven point for a solar panel installation is the point at which the savings on electricity costs equal the initial investment. In other words, it's the point at which the homeowner will have made back the money they spent on the solar panel system.

To calculate the breakeven point, we use a formula that takes into account several factors:
The size of the solar panel array in square meters
The cost of electricity in dollars per kilowatt-hour
The cost of the solar panels in dollars
The cost of installation in dollars
The annual cost of maintenance in dollars
The efficiency of the solar panels as a decimal (e.g. 0.15 for 15%)
The tilt of the solar panels in degrees

The formula for calculating the breakeven point is: totalCost / (annualEnergy * electricityCost) such that “totalCost = panelCost + installationCost + maintenanceCost * 25” and “annualEnergy = area * efficiency * (1 + tilt/90) * 4.6”, where 25 is the typical lifespan of a solar panel and 4.6 is the yearly average solar radiation of Canada.

#### Algorithms: Green Impact

For the green impact, we use the given formulas in order to calculate the amount of green energy produced, and its visualizations:

The first formula we use calculates the energy produced by the solar panel array, measured in kilojoules. It multiplies the solar panel output, measured in watts, by the number of hours of sunlight and a conversion factor of 3.6 kJ/Wh. 

The second formula calculates the amount of oil (or gasoline) replaced by the solar panel array, measured in litres. It divides the energy produced by the solar panel array by the energy density of gasoline, the density of gasoline, and a conversion factor of 1000 kJ/MJ. 

The third formula calculates the amount of coal replaced by the solar panel array, measured in kilograms. It divides the energy produced by the solar panel array by the energy density of coal and a conversion factor of 1000 kJ/MJ. 

The fourth formula calculates the number of trees that are saved by the solar panel array, measured in number of trees. It multiplies the energy produced by the solar panel array by the CO2 emissions per kWh and divides that by the tree sequestration rate.


#### Algorithms: SoQuo Index

For the SoQuo Index, it is a proprietary index using the given factors above to provide the user with a score out of 100, for how suitable their location and building characteristics are for solar panel installations.


#### Data Utilization, APIs, Security & Privacy

For the SoQuo Index, it is a proprietary index using the given factors above to provide the user with a score out of 100, for how suitable their location and building characteristics are for solar panel installations.

For data utilization, it is used in order for the application to provide accurate measurements and visualizations for the cost and savings, green impact and the propriety index, the SoQuo Index.

The use of Geocoder API allows the app to obtain the longitude and latitude of a given postal code. 

In terms of privacy and security considerations, no data is stored for the consumer, poses no risk to any vulnerabilities, and is as secure as the services used, Vercel and Firebase, which are globally-established deployment and cloud database providers respectively. 


#### API Routes (all GET requests)

- `api/calculate/` - returns a combination of the reponses to the following endpoints
- `api/insights/` - returns a list of insights
- `api/costs/` - returns costs and savings info
- `api/greenimpact/` - returns green impact info
- `api/solarindex/` - returns solar index info
- `api/recommendations/` - returns recommendations info


## Execution:

In terms of functionality and execution, the use of React, NextJS, NodeJS, and Firebase Firestore suggests the use of a modern tech stack that is well-suited for building a web application. Additionally, the use of Vercel for deployment and Firebase for the database suggests that the solution is well-prepared for scalability and global deployment. The use of React components also means that the front end is highly modular and independent, and the reuse of components allows for efficient development. Overall, it seems that the architectural, development, and design decisions have been made appropriately for the intended application and should result in a functional solution.

## Feasibility:

In terms of deployment, the solution is already ready to be deployed and has already been deployed on Vercel, and can be tested here (https://soquo.vercel.app/). Vercel is a well-known deployment service that scales automatically globally and allows us to seamlessly integrate your CMS, commerce, or database for faster builds. Additionally, Firebase by Google is also scalable for our database and hence, feasibility-wise the solution is ready to be deployed (and has already been deployed) and is ready to be scaled. 

## Innovation:

Canada has one established Solar Systems Marketplace: Solr Solvr. However, Solr Solvr lacks the three pillars that SoQuo does: Costs & Savings, Green Impact, and a Suitability Index. Additionally, they do not provide educational material for the consumer to read through.

Another similar company is Energy Sage, a US-only Solar Systems Marketplace. Although they only operate in the US, we believe that it is important to compare their features to ours. As the leading Solar Systems Marketplace in the US, they have a more robust feature set than Solr Solvr. Despite that, they still lack some features, such as not showing the consumer’s green impact, as well as lacking a suitability index, forcing the consumer to wait for a quote to come in after a few business days.

In terms of technology, SoQuo uses a modern software architecture and is found consistently through all web applications.


## Closing Notes:

Authors: Nikhil Lakhwani, Peter Chow, Shivam Shah, Michael Septirymen
Acknowledgements: Chakra UI

