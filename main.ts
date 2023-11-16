const validatosStatusApiUrl = Deno.env.get("VALIDATOS_STATUS_API_URL");
const fetchServiceStatus = async () => {
  if (!validatosStatusApiUrl) {
    console.log("status url not set!");
    return;
  }
  const res = await fetch(validatosStatusApiUrl);
  const jsonStatus = await res.json();
  console.log("obtained services status: ", jsonStatus);
};

Deno.cron("check-status-validatos", "*/10 * * * *", fetchServiceStatus);
