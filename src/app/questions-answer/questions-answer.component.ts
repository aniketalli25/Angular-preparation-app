import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-answer',
  templateUrl: './questions-answer.component.html',
  styleUrl: './questions-answer.component.css'
})
export class QuestionsAnswerComponent {
  searchText: string = '';
  selectedCategory: string = 'all';

  questions = [
    {
      id: 1,
      category: 'basic',
      question: 'What is Angular?',
      answer: 'Angular is a popular front-end web framework developed by Google for building dynamic web applications. It allows developers to use HTML as a template language and extend its syntax to express application components clearly and concisely.',
    },
    {
      id: 2,
      category: 'basic',
      question: 'What is a component in Angular?',
      answer: 'A component in Angular is a building block of the UI. It is a TypeScript class that controls a part of the screen, defined by an HTML template and associated with a specific set of data and behavior.',
    },
    {
      id: 3,
      category: 'basic',
      question: 'What is a module in Angular?',
      answer: 'A module in Angular is a container for a set of related components, directives, pipes, and services. It provides a way to organize the application into cohesive blocks of functionality.',
    },
    {
      id: 4,
      category: 'basic',
      question: 'What is Angular CLI?',
      answer: 'Angular CLI is a command-line interface tool that helps to automate the development workflow for Angular applications. It can generate components, services, and more, as well as handle builds and tests.',
    },
    {
      id: 5,
      category: 'basic',
      question: 'What is a service in Angular?',
      answer: 'A service in Angular is a class that provides reusable business logic, data management, or functionality. Services can be injected into components and other services to share code across the application.',
    },
    {
      id: 6,
      category: 'basic',
      question: 'What is a directive in Angular?',
      answer: 'A directive in Angular is a special marker in the DOM that can attach behavior to elements, manipulate the DOM structure, or modify attributes. There are built-in directives like *ngIf and *ngFor, and custom directives can also be created.',
    },
    {
      id: 7,
      category: 'advanced',
      question: 'What is Angular Ivy?',
      answer: 'Angular Ivy is the default rendering engine for Angular as of version 9. It offers faster compilation, smaller bundle sizes, and improved debugging capabilities compared to the previous engine, View Engine.',
    },
    {
      id: 8,
      category: 'advanced',
      question: 'What is Angular Universal?',
      answer: 'Angular Universal is a technology that allows server-side rendering of Angular applications. It renders the initial HTML on the server, which can improve the performance and SEO of the application.',
    },
    {
      id: 9,
      category: 'advanced',
      question: 'What are Angular Pipes?',
      answer: 'Angular Pipes are a way to transform data before it is displayed in the view. They can format dates, numbers, strings, and more. Custom pipes can also be created for specific transformations.',
    },
    {
      id: 10,
      category: 'advanced',
      question: 'What is RxJS in Angular?',
      answer: 'RxJS is a library for reactive programming using Observables. Angular heavily relies on RxJS for handling asynchronous data streams, such as HTTP requests and event handling.',
    },
    {
      id: 11,
      category: 'advanced',
      question: 'What is lazy loading in Angular?',
      answer: 'Lazy loading in Angular is a technique to load modules only when they are needed, rather than loading the entire application upfront. This can significantly improve the initial load time of the application.',
    },
    {
      id: 12,
      category: 'advanced',
      question: 'What is Angular Routing?',
      answer: 'Angular Routing is a module that allows you to navigate between different views or components within the application. It helps manage the navigation and URL structure, and supports features like lazy loading and route guards.',
    },
    {
      id: 13,
      category: 'advanced',
      question: 'What are Angular Guards?',
      answer: 'Angular Guards are used to control the access to certain routes in an application. They can check conditions before navigating to a route or before loading components, ensuring that the user has the necessary permissions or data.',
    },
    {
      id: 14,
      category: 'performance',
      question: 'What is Ahead-of-Time (AOT) compilation in Angular?',
      answer: 'Ahead-of-Time (AOT) compilation is a feature in Angular that compiles the application during the build process, before it is served to the browser. This results in faster rendering and smaller bundle sizes compared to Just-in-Time (JIT) compilation.',
    },
    {
      id: 15,
      category: 'performance',
      question: 'What is Change Detection in Angular?',
      answer: 'Change Detection is a mechanism in Angular that tracks changes in data and updates the view accordingly. It can be optimized using OnPush strategy to reduce the number of checks and improve performance.',
    },
    {
      id: 16,
      category: 'performance',
      question: 'What are Angular Zones?',
      answer: 'Zones in Angular are an execution context that persists across async tasks. Angular uses zones to detect changes automatically and update the view. By using zones, Angular can track changes and re-render only the affected parts of the DOM.',
    },
    {
      id: 17,
      category: 'performance',
      question: 'What is Tree Shaking in Angular?',
      answer: 'Tree shaking is a technique used in Angular to remove unused code during the build process. By analyzing the dependency graph, Angular can eliminate code that is not referenced, resulting in smaller bundle sizes and improved performance.',
    },
    {
      id: 18,
      category: 'performance',
      question: 'What are Angular Service Workers?',
      answer: 'Angular Service Workers are a feature that enables Progressive Web App (PWA) capabilities. Service workers can cache assets, handle offline requests, and improve the performance and reliability of the application.',
    },
    {
      id: 19,
      category: 'performance',
      question: 'How to optimize Angular applications?',
      answer: 'Optimizing Angular applications involves techniques like lazy loading, AOT compilation, reducing change detection cycles, tree shaking, and using OnPush change detection strategy to enhance performance.',
    },
    {
      id: 20,
      category: 'advanced',
      question: 'What is the difference between Angular and AngularJS?',
      answer: 'Angular is a complete rewrite of AngularJS. Angular is a modern framework using TypeScript and supports a component-based architecture, whereas AngularJS is based on JavaScript and uses a more traditional MVC architecture.',
    },
  ];

  filteredQuestions() {
    return this.questions.filter((question) => {
      const matchesCategory =
        this.selectedCategory === 'all' || question.category === this.selectedCategory;
      const matchesSearchText =
        !this.searchText ||
        question.question.toLowerCase().includes(this.searchText.toLowerCase());

      return matchesCategory && matchesSearchText;
    });
  }
}
