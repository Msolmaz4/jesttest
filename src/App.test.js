import { getByText, render, screen, waitFor } from '@testing-library/react';
//hangi sazfalari test edecegim
import App from './App';

test("app",async()=>{
  render(<App/>)
  // queryByText de yoklugunu kontrol edeceksin
  // getByText= varligini kontroledeceksin expect("elleme").not.toBe...
  //burda findBytext burda asyn kullaniriy app usettimey degisme durumu awit kullaniriy burasi onemli
  //https://testing-library.com/docs/react-testing-library/cheatsheet bu documant bakabiliry
   //const element = await screen.findByText("bbbb")
   //burda findBzText yerine bunuda kullanabiliriy iceriyi bekliyor
   let element
   await waitFor(()=>{
    element = screen.getByText("bbbb")
   })
//coklu buldurma
 //const element = screen.getAllByText("dere")
  //expect(element[0]).toBeInTheDocument();
  expect(element).toBeInTheDocument();
})
//bu elementlerin durunmu dikkqt edilmesi gerekir
// No Match	1 Match	1+ Match	Await?
// getBy	throw	return	throw	No burda iki tane varsa hata doner
// findBy	throw	return	throw	Yes
// queryBy	null	return	throw	No
// getAllBy	throw	array	array	No  burda fazlaise hata donmez fiika
// findAllBy	throw	array	array	Yes
// queryAllBy	[]	array	array	No



















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

