#Keyword Chatbot Engine

## Propose

這個引擎會管理一個個的**Scenario**，每個Scenario代表著一個Task。比方說，我們MCDS Team的BossBot需要幫忙處理三種事情：

- Weekly Report
- Friday Report
- Submit Trello Ticket

我們假設以下chatbot對話

```
me: Hello

bossbot: Howdy, may I help you? These topics I may help you with : [Weekly Report], [Friday Report], [Trello Ticket]

me: I want to submit Weekly Report

bossbot: Sure, I see you not yet submitted a Weekly Report for this week, let's start.

bossbot: What you have done this week?

me : TOR#3330 done, Archive done.

bossbot: Anything else? You can tell me [Nothing else].

me : Jira ticket ISA-10054 verified

bossbot: Anything else? You can tell me [Nothing else].

me : Nothing else.

bossbot: So here is tasks you will submit :
bossbot: 1. TOR#3330 done, Archive done.
bossbot: 2. Jira ticket ISA-10054 verified.
bossbot: submit? [OK] [CANCEL]
```

## Scenario
這個對話就是一個Scenario，觸發點就是*Weekly Report*，然後這個Scenario看起來有3個state: 進入WeeklyReport，填寫Task，確認Submit。 當過了最後一個state，整個bot就會跳出這個scenario，跳回主scenario(也就是會提示你有哪些scenario的state)。

簡單的說，Scenario就是一個state，而每個Scenario有自己的state。主Scenario叫做**MainScenario**，讓我給她想個有趣一點的名字.....總之，所以在這個case裡面，我們有四個Scenario，而每個Scenario結束完以後預設都是回到MainScenario去。



