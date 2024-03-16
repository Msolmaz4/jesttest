import { render, screen } from '@testing-library/react';
//hangi sazfalari test edecegim
import App from './App';



test('app.js test islemleri', () => {
  //render yapilacak sayafi burda kullan
  render(<App />);
  //sayfasdda olup olmadigini aramak icin getBztex kullamilir
  const element = screen.getByText(/hallo/i);
//expexct icinde  elemetin tobeInthedicmeby kontrolediyorum
  expect(element).toBeInTheDocument();
});
