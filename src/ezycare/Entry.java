package ezycare;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "entry")
public class Entry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String taskId;
	private Date logDate;
	private String version;
	private String intent;
	private String ipAddress;

	public Entry(String taskId, Date logDate, String version, String intent, String ipAddress) {
		super();
		this.taskId = taskId;
		this.logDate = logDate;
		this.version = version;
		this.intent = intent;
		this.ipAddress = ipAddress;
	}

	public String getTaskId() {
		return taskId;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public Date getLogDate() {
		return logDate;
	}

	public void setLogDate(Date logDate) {
		this.logDate = logDate;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getIntent() {
		return intent;
	}

	public void setIntent(String intent) {
		this.intent = intent;
	}

}
