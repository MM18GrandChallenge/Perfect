# Fashion and Beauty Item Recognition Challenge

## Overview

Fashion and beauty are how we present ourselves to the world. The way we dress and makeup defines our unique style and distinguishes us from other people. Fashion and beauty in modern society have become an indispensable part of who I am. Unsurprisingly, the global fashion apparel market alone has surpassed 3 trillion US dollars today since 2013, and accounts for nearly 2 percent of the world’s Gross Domestic Product (GDP).

As the revolution of artificial intelligence (AI) is underway, AI is starting to hit the magnanimous field of fashion and beauty, whereby reshaping our fashion and beauty life with the power of data. Therefore, as a joint activity to promote impactful research that has the potential to solve challenging problems of fashion and beauty nowadays, the beauty industry’s leading app developer, Perfect Corp. (recording over 500 million app downloads in September 2017), is collaborating with CyberLink Corp. as well as Academia Sinica to provide a large-scale image dataset of totally XXX images of fashion and beauty items, namely PerfectXXX dataset. PerfectXXX is vast in scale and rich and diverse in content to collect as many as possible fashion and beauty items from major e-commerce sites.

## Task Description

This year we will focus on a particular task: fashion and beauty item recognition in the wild. Meanwhile, we are open for innovative self-proposed topics.

### * Main Task: Fashion and Beauty Item Recognition in the Wild

The task is designed to predict the impact of sharing different posts for a publisher on social media. Given a photo (a.k.a. post) from a publisher, the goal is to automatically predict the popularity of the photo, e.g., view count for Flickr, Pin count for Pinterest, etc.

### * Task2: Tomorrow’s Top Prediction

The task is designed to discover top-k popular posts on social media. Suppose to have a set of candidate photos and the history data of past photo sharing, the goal is to automatically predict which will be the most popular photos in the next day.

The contestants are asked to develop their prediction system based on the SMP dataset provided by the Challenge (as training data), plus possibly additional public/private data, to address one or both of the two given tasks. For the evaluation purpose, a contesting system is asked to produce prediction results of popularity. The accuracy will be evaluated by pre-defined quantitative evaluation. The contestants need to introduce their systems and datasets in the conference.

### * Additional Task: Open Topics

To encourage the exploration of the PerfectXXX application scope, we also accept innovative topics proposed by the participants themselves, e.g., object localization, data labeling, etc. For open topics, the participants need to clearly define the topic, demonstrate the technical advancement of their proposed solutions, specify the evaluation protocols, and provide PerfectXXX based experimental results.


## Dataset

PerfectXXX is a collection of fashion and beauty items from XXX popular e-commerce sites, including Amazon (USA, India), Cult Beauty, Flipkart, Galleria, Sephora, Strawberrynet, Walgreens, and Walmart. The table below shows the detailed statistics.

Dataset | #Post | #User | Temporal Range (Years) | Avg. Title Length | Avg. Description Length | Avg. Views
------- | ----- | ----- | ---------------------- | ----------------- | ----------------------- | ----------
SMP-T1 | 400K | 135 | 6 | 20 | 9 | 114 | 131

## Submission Format

Each team is allowed to submit the results of at most three runs and selects one run as the primary run of the submission (we do not guarantee to evaluate additional runs), which will be measured for performance comparison across teams.
Each submission is required to be formatted in a JSON File as follows.


### * Task1 (ascending by post_id)
`
{
 "version": "VERSION 1.2", "result":[
 {
 "post_id": "post6374637",
 "popularity_score": 2.1345
 },
 ...
 {
 "post_id": "post3637373",
 "popularity_score": 3.1415
 }
 ],
 "external_data":{
 "used": "true", # Visual Features. True indicates used of external data.
 "details": "VGG-19 pre-trained on ImageNet training set" # Details of your external data.
 }
 }
`

### * Task2 (ascending by post_id)
`
{
"version": "VERSION 1.2", "result":[
{
"post_id": "post6374637",
"ranking_position": 1,
"popularity_score": 2.1345
},
...
{
"post_id": "post3637373",
"ranking_position": 5,
"popularity_score": 3.1415
}
],
"external_data":{
"used": "true", # Visual Features. True indicates used of external data.
"details": "VGG-19 pre-trained on ImageNet training set" # Details of your external data.
}
}
`

*Note*: comments in blue are illustrative and help us to provide inline detailed explanations. Please avoid them in your submissions. Participants please strictly follow the submission format.


## Evaluation Metric

The evaluation provided here can be used to obtain performances on the testing set of SMP. It contains multiple common metrics, including Spearman Ranking Correlation, MAE, MSE, ACC@5, and NDCG@10.

By quantitative evaluation, we measure the systems submitted to this challenge on a testing set. Our evaluation protocol is applied on the following criteria:
* Prediction Correlation: whether the predicted popularity more correlates with the actual value of the popularity?
* Prediction Error: to judge the error of the score prediction
* Ranking Relevance: to measure the ranking relevance between top-k items and predicted ranking

## Participation

The Challenge is a team-based contest. Each team can have one or more members, and an individual cannot be a member of multiple teams.

At the end of the Challenge, all teams will be ranked based on both objective evaluation and human evaluation described above. The top three performing teams will receive award certificates and/or cash prizes. At the same time, all accepted submissions are qualified for the conference’s grand challenge award competition. Please note that each winning team for the cash prizes is required to open source their proposed solution on Github before qualifying to receive the cash prizes.

## Timeline

* March 20, 2017: Dataset available for download (training set)
* June 11, 2018: Test set available for download
* June 14, 2018: Results submission
* June 19 - June 23, 2018: Objective evaluation and human evaluation
* June 24, 2018: Evaluation results announce
* July 8, 2018: Paper submission deadline (please follow the instructions on the main conference website)

## Paper Submission

Please follow the guideline of ACM Multimedia 2018 Grand Challenge for the paper submission.

## Organization

* Main Organizers
** Wen-Huang Cheng, Academia Sinica
** Jianlong Fu, Microsoft Research
** PerfecrtCorp
** Jia Jia, Tsinghua University
** Si Liu, Chinese Academy of Sciences

* Main Contact
** Wen-Huang Cheng (whcheng@citi.sinica.edu.tw), Academia Sinica
** Shintami Chusnul Hidayati (shintami@citi.sinica.edu.tw), Academia Sinica
** Yu-Ting Chang (juliachang@citi.sinica.edu.tw), Academia Sinica
