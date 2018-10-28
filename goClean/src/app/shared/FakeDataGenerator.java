import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.Scanner;
import java.io.*;
import java.util.Map;
import java.util.Random;
import java.util.HashMap;
import java.time.*;
import java.util.UUID;

// empty bins every sunday
public class FakeDataGenerator {
    public static void main(String[] args) {

        Map<String, Integer> bins = new HashMap<>();

        bins.put("a1", 0);
        bins.put("a2", 0);
        bins.put("a3", 0);
        bins.put("a4", 0);
        bins.put("a5", 0);
        bins.put("a6", 0);
        bins.put("a7", 0);
        bins.put("a8", 0);
        bins.put("a9", 0);
        bins.put("a10", 0);
        bins.put("a11", 0);
        bins.put("a12", 0);
        bins.put("a13", 0);
        bins.put("a14", 0);
        bins.put("a15", 0);
        bins.put("a16", 0);

        LocalDateTime currentDate = LocalDateTime.now();
        Writer wr = null;
        int binMax = 120;
        int binCurrent = 0;

        try {
            wr = new FileWriter("binReadings.json");
            // start json
            wr.write("{\n");

            LocalDateTime date = LocalDate.of(2018, 10, 25).atTime(00, 00);
            Random random = new Random();
            while (date.plusHours(2).compareTo(currentDate) < 0) {

                // generate unique key

                int randomNumber = random.nextInt(3 + 1 - 0) + 0;

                for (Map.Entry<String, Integer> entry : bins.entrySet()) {
                    String uniqueID = UUID.randomUUID().toString();
                    String binID = entry.getKey();
                    binCurrent = entry.getValue();
                    binCurrent = binCurrent + randomNumber;
                    if (binCurrent >= binMax) {
                        binCurrent = binMax;
                    }
                    wr.write(String.format(
                            "\n \"%s\" : {\n \"metadata\": {\n \"time\": \"%s\" \n},\n \"payload_fields\": {\n \"hardware_id\":\"%s\",\n \"level\":\"%s\"\n}\n},",
                            uniqueID, date.toString(), binID, binCurrent));
                }
                date = date.plusHours(2);
            }

            wr.write("}\n");

            wr.flush();
            wr.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}