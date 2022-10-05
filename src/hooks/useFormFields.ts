interface Option {
  label: string;
  value: string;
}

const useFormFields = () => {
  const genderOptions: Option[] = [
    { label: "Gender", value: `-1` },
    { label: "Male", value: `male` },
    { label: "Female", value: `female` },
  ];

  const enrollOptions: Option[] = [
    { label: "Programs", value: `-1` },
    { label: "(EYFS Curriculum- ages 3.6- 5.6)", value: `EYFS` },
    { label: "Key Stage 1 – ages 5-7 (Years 1 and 2)", value: `Stage 1` },
    { label: "Key Stage 2 – ages 7-11 (Years 3-6)", value: `Stage 2` },
    { label: "Key Stage 3 – ages 11-14 (Years 7-9)", value: `Stage 3` },
    { label: "Key Stage 4 – ages 14-17 (Years 10-12)", value: `Stage 4` },
  ];

  const dayOptions: Option[] = [
    { label: "Select Day", value: `-1` },
    { label: "1", value: `1` },
    { label: "2", value: `2` },
    { label: "3", value: `3` },
    { label: "4", value: `4` },
    { label: "5", value: `5` },
    { label: "6", value: `6` },
    { label: "7", value: `7` },
    { label: "8", value: `8` },
    { label: "9", value: `9` },
    { label: "10", value: `10` },
    { label: "11", value: `11` },
    { label: "12", value: `12` },
    { label: "13", value: `13` },
    { label: "14", value: `14` },
    { label: "15", value: `15` },
    { label: "16", value: `16` },
    { label: "17", value: `17` },
    { label: "18", value: `18` },
    { label: "19", value: `19` },
    { label: "20", value: `20` },
    { label: "21", value: `21` },
    { label: "22", value: `22` },
    { label: "23", value: `23` },
    { label: "24", value: `24` },
    { label: "25", value: `25` },
    { label: "26", value: `26` },
    { label: "27", value: `27` },
    { label: "28", value: `28` },
    { label: "29", value: `29` },
    { label: "30", value: `30` },
    { label: "31", value: `31` },
  ];
  const monthOptions: Option[] = [
    { label: "Select Month", value: `-1` },
    { label: "1", value: `1` },
    { label: "2", value: `2` },
    { label: "3", value: `3` },
    { label: "4", value: `4` },
    { label: "5", value: `5` },
    { label: "6", value: `6` },
    { label: "7", value: `7` },
    { label: "8", value: `8` },
    { label: "9", value: `9` },
    { label: "10", value: `10` },
    { label: "11", value: `11` },
    { label: "12", value: `12` },
  ];
  const yearOptions: Option[] = [
    { label: "Select Year", value: `-1` },
    { label: "2022", value: `2022` },
    { label: "2021", value: `2021` },
    { label: "2020", value: `2020` },
    { label: "2019", value: `2019` },
    { label: "2018", value: `2018` },
    { label: "2017", value: `2017` },
    { label: "2016", value: `2016` },
    { label: "2015", value: `2015` },
    { label: "2014", value: `2014` },
    { label: "2013", value: `2013` },
    { label: "2012", value: `2012` },
    { label: "2011", value: `2011` },
    { label: "2010", value: `2010` },
    { label: "2009", value: `2009` },
    { label: "2008", value: `2008` },
    { label: "2007", value: `2007` },
    { label: "2006", value: `2006` },
    { label: "2005", value: `2005` },
    { label: "2004", value: `2004` },
    { label: "2003", value: `2003` },
    { label: "2002", value: `2002` },
    { label: "2001", value: `2001` },
    { label: "2000", value: `2000` },
    { label: "1999", value: `1999` },
    { label: "1998", value: `1998` },
    { label: "1997", value: `1997` },
    { label: "1996", value: `1996` },
    { label: "1995", value: `1995` },
    { label: "1994", value: `1994` },
    { label: "1993", value: `1993` },
    { label: "1992", value: `1992` },
    { label: "1991", value: `1991` },
    { label: "1990", value: `1990` },
    { label: "1989", value: `1989` },
    { label: "1988", value: `1988` },
    { label: "1987", value: `1987` },
    { label: "1986", value: `1986` },
    { label: "1985", value: `1985` },
    { label: "1984", value: `1984` },
    { label: "1983", value: `1983` },
    { label: "1981", value: `1981` },
    { label: "1980", value: `1980` },
    { label: "1979", value: `1979` },
    { label: "1978", value: `1978` },
    { label: "1977", value: `1977` },
    { label: "1976", value: `1976` },
    { label: "1975", value: `1975` },
    { label: "1974", value: `1974` },
    { label: "1973", value: `1973` },
    { label: "1972", value: `1972` },
    { label: "1971", value: `1971` },
    { label: "1970", value: `1970` },
    { label: "1969", value: `1969` },
    { label: "1967", value: `1967` },
    { label: "1966", value: `1966` },
    { label: "1965", value: `1965` },
    { label: "1964", value: `1964` },
    { label: "1963", value: `1963` },
    { label: "1962", value: `1962` },
    { label: "1961", value: `1961` },
    { label: "1960", value: `1960` },
    { label: "1959", value: `1959` },
    { label: "1958", value: `1958` },
    { label: "1957", value: `1957` },
    { label: "1956", value: `1956` },
    { label: "1955", value: `1955` },
    { label: "1954", value: `1954` },
    { label: "1953", value: `1953` },
  ];

  const joinUsFields = () => [
    {
      name: "name",
      label: "Student Name",
      type: "textField",
      autoFocus: true,
      defaultValue: "",
    },
    {
      name: "birthDate",
      label: "Birth Date",
      type: "wrapper",
      autoFocus: false,
      defaultValue: "",
      options: [
        {
          name: "day",
          label: "Day",
          type: "select",
          autoFocus: false,
          defaultValue: "-1",
          options: dayOptions,
        },
        {
          name: "month",
          label: "Month",
          type: "select",
          autoFocus: false,
          defaultValue: "-1",
          options: monthOptions,
        },
        {
          name: "year",
          label: "Month",
          type: "select",
          autoFocus: false,
          defaultValue: "-1",
          options: yearOptions,
        },
      ],
    },
    {
      name: "yearGroup",
      label: "Year group (grade level)",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      autoFocus: false,
      defaultValue: "-1",
      options: genderOptions,
    },
    {
      name: "enrolledIn",
      label: "Currently enrolled in",
      type: "select",
      autoFocus: false,
      defaultValue: "-1",
      options: enrollOptions,
    },
    {
      name: "parentNumber",
      label: "Parent phone number",
      type: "number",
      autoFocus: false,
      defaultValue: "",
    },
    {
      name: "howYouHear",
      label: "How did you hear about us?",
      type: "textArea",
      autoFocus: false,
      defaultValue: "",
    },
  ];

  const bannerFields = () => [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
  ];

  const informationFields = () => [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Nada Ahmed",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
    {
      name: "restaurant",
      label: "Restaurant/Hotel Name",
      placeholder: "Restaurant/Hotel Name",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
    {
      name: "email",
      label: "E-mail–mobile",
      placeholder: "E-mail–mobile",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
    {
      name: "code",
      label: "Referral Code",
      placeholder: "Referral Code",
      type: "textField",
      autoFocus: false,
      defaultValue: "",
    },
  ];

  const getFormFields = (name: string) => {
    switch (name) {
      case "joinUs":
        return joinUsFields();
      case "banner":
        return bannerFields();
      case "information":
        return informationFields();
      default:
        return [];
    }
  };

  return {
    getFormFields,
  };
};

export default useFormFields;
