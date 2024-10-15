// images
import windmillImage from "/images/img/platform/windmill.png";
import powerhouseImage from "/images/img/platform/powerhouse.png";
import batteryImage from "/images/img/platform/battery.png";
import setupImage from "/images/img/platform/setup.png";

// icons
import iconWindmill from "/images/icons/platform/windmill.svg";
import iconPowerhouse from "/images/icons/platform/powerhouse.svg";
import iconBattery from "/images/icons/platform/battery.svg";
import iconSetup from "/images/icons/platform/setup.svg";

export const WHY_US_DATA = [
  {
    icon: iconWindmill,
    image: windmillImage,
    title: "SolarPVSystems",
    subtitle: "ServiceSubtitleSolar",
    text: ["sun", "wind", "water", "hydrogen"],
  },
  {
    icon: iconBattery,
    image: batteryImage,
    title: "ServiceTitleWindTurbines",
    subtitle: "ServiceSubtitleWindEnergy",
    text: ["airHeat", "geothermalHeat", "ecoHeating"],
  },
  {
    icon: iconPowerhouse,
    image: powerhouseImage,
    title: "ServiceTitleGreenHydrogen",
    subtitle: "ServiceSubtitleSolarHydro",
    text: ["eCars", "eBikes", "eHeating"],
  },
  {
    icon: iconSetup,
    image: setupImage,
    title: "ServiceTitleRenewableUsage",
    subtitle: "ServiceSubtitleRenewableUsage",
    text: [
      "energyCounselling",
      "financing",
      "pvCleaning",
      "dismantlingDisposal",
    ],
  },
];
