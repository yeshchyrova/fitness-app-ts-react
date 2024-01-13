export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IBenefitItem {
  icon: JSX.Element;
  title: string;
  description: string;
}