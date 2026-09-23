# What Should I Do Today? — Design Document

**Author:** Ziyong Liu  
**Class:** [CS5610 Web Development](https://johnguerra.co/classes/webDevelopment_online_fall_2026/)

## 1. Project Description

“What Should I Do Today?” is a simple front-end website that recommends activities based
on the user’s current mood and energy level.

Sometimes people have free time but do not know what they want to do. The website helps
them make a quick decision by presenting a small number of simple activity choices.

On the Home page, users select a mood and an energy level. A JavaScript function
compares those selections with a predefined list of activities and displays a suitable
recommendation.

The website contains three pages:

1. **Home** — Lets users choose their mood and energy level and receive a
   recommendation.
2. **Activities** — Displays the complete list of available activities.
3. **AI Ideas** — Presents additional activity ideas developed with generative AI
   assistance.

The recommendation feature uses original vanilla JavaScript and local data. It does not
make live requests to an AI service or external API.

## 2. Project Objective

The objective is to create a clear and responsive website that helps users choose a
simple activity based on how they currently feel. The project demonstrates semantic
HTML5, organized CSS3, responsive CSS Grid and Flexbox layouts, ES6 modules, user input,
and DOM updates.

## 3. Target Customers

The target customers are students and other people who sometimes have free time but have
difficulty deciding what to do. They want quick suggestions without creating an account
or providing personal information.

## 4. User Personas

### Persona 1: College Student

Alex is a 20-year-old college student who wants to take a short break after studying.
Alex wants an activity that matches their current energy level without reading a long
list.

### Persona 2: Busy Young Adult

Jordan is a 26-year-old young professional who has finished work and has some free time.
Jordan wants a simple activity that matches their mood and is easy to view on a phone or
computer.

## 5. User Stories

1. As a tired student, I want to select a low energy level so that I can receive an
   activity that does not require much effort.
2. As a user who is unsure what to do, I want to select my mood and energy level so that
   the website can recommend an appropriate activity.
3. As a user who wants to compare choices, I want to view the complete activities page
   so that I can choose an activity myself.

## 6. Original JavaScript Feature

The original component is the mood-and-energy activity recommender. JavaScript reads the
selected values, filters a local array, chooses a matching activity, and updates the
page. If no exact activity matches, it displays a fallback suggestion.

## 7. Design Mockups

### Home

```text
+--------------------------------------------------+
| Site title            Home Activities AI Ideas  |
+--------------------------------------------------+
| What should you do today?                       |
| Select a mood:       [ Select ]                 |
| Select energy:       [ Select ]                 |
|                      [ Recommend ]              |
| +----------------------------------------------+ |
| | Recommendation result                       | |
| +----------------------------------------------+ |
+--------------------------------------------------+
| Ziyong Liu                                      |
+--------------------------------------------------+
```

### Activities

```text
+--------------------------------------------------+
| Site title            Home Activities AI Ideas  |
+--------------------------------------------------+
| Activities                                       |
| +------------+ +------------+ +---------------+ |
| | Activity 1 | | Activity 2 | | Activity 3    | |
| +------------+ +------------+ +---------------+ |
+--------------------------------------------------+
```

### AI Ideas

```text
+--------------------------------------------------+
| Site title            Home Activities AI Ideas  |
+--------------------------------------------------+
| AI-assisted ideas                                |
| +----------------------------------------------+ |
| | Additional activity idea                     | |
| +----------------------------------------------+ |
+--------------------------------------------------+
```

## 8. Accessibility and Standards

The project uses semantic elements, labeled form controls, real buttons and links,
keyboard focus styles, descriptive metadata, and responsive layouts. Each HTML page will
be checked with the W3C Markup Validation Service before submission.
