// images
import windmillImage from "../../../../../GTG-24-front/src/assets/img/platform/windmill.png";
import powerhouseImage from "../../../../../GTG-24-front/src/assets/img/platform/powerhouse.png";
import batteryImage from "../../../../../GTG-24-front/src/assets/img/platform/battery.png";
import setupImage from "../../../../../GTG-24-front/src/assets/img/platform/setup.png";

// icons
import iconWindmill from "../../../../../GTG-24-front/src/assets/icons/platform/windmill.svg";
import iconPowerhouse from "../../../../../GTG-24-front/src/assets/icons/platform/powerhouse.svg";
import iconBattery from "../../../../../GTG-24-front/src/assets/icons/platform/battery.svg";
import iconSetup from "../../../../../GTG-24-front/src/assets/icons/platform/setup.svg";

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
