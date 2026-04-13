# Profile Card (React)

A simple and responsive **Profile Card UI** built using React. This project displays multiple profile cards using dynamic data rendering with `props` and the `map()` method.

## 📷 Screenshots

![Desktop Degign](public/images/desktop.png)
![Mobile Degign](public/images/mobile.png)

## 🚀 Features

- Responsive design
  - Desktop: Cards displayed in **row**
  - Mobile: Cards displayed in **column**

- Reusable React components
- Dynamic data rendering using **props**
- Array of profile objects rendered using **map()**
- Clean and simple UI

## 🛠️ Tech Stack

- React JS
- JavaScript (ES6)
- CSS / Flexbox

## 💻 Example Code

```js
{
  profiles.map((profile, index) => <ProfileCard key={index} data={profile} />);
}
```

## 📱 Responsive Design

- Used **Flexbox**
- `flex-direction: row` for desktop
- `flex-direction: column` for mobile (using media queries)

## 🎯 Learning Outcomes

- Understanding of **props in React**
- Rendering lists using **map()**
- Building reusable components
- Creating responsive layouts

## 🙌 Author

- Nishu singh
