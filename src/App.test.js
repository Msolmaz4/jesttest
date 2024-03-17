import { getByText, queryByText, render, screen } from '@testing-library/react';
//hangi sazfalari test edecegim
import App from './App';

test("app",async()=>{
  render(<App/>)
  // queryByText de yoklugunu kontrol edeceksin
  // getByText= varligini kontroledeceksin expect("elleme").not.toBe...
  //burda findBytext burda asyn kullaniriy app usettimey degisme durumu awit kullaniriy burasi onemli
  //https://testing-library.com/docs/react-testing-library/cheatsheet bu documant bakabiliry
  const element = await screen.findByText("bbbb")
  expect(element).toBeInTheDocument();
})





















// //azni isimde kontol yapacaksan 
// describe("button test",()=>{

// test('app.js test islemleri', () => {
//   //render yapilacak sayafi burda kullan
//   render(<App />);
//   //sayfasdda olup olmadigini aramak icin getBztex kullamilir
//   const element = screen.getByText(/hallo/i);
// //expexct icinde  elemetin tobeInthedicmeby kontrolediyorum
//   expect(element).toBeInTheDocument();
// });
// test('app.js test islemleri 21', () => {
//   //render yapilacak sayafi burda kullan
//   render(<App />);
//   //sayfasdda olup olmadigini aramak icin getBztex kullamilir
//   const element = screen.getByText(/hallo/i);
// //expexct icinde  elemetin tobeInthedicmeby kontrolediyorum
//   expect(element).toBeInTheDocument();
// });



// })

