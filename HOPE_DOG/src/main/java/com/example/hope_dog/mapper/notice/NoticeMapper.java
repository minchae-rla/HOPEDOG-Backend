package com.example.hope_dog.mapper.notice;

import com.example.hope_dog.dto.admin.AdminFileDTO;
import com.example.hope_dog.dto.donation.DonationListDTO;
import com.example.hope_dog.dto.notice.NoticeListDTO;
import com.example.hope_dog.dto.notice.NoticeViewDTO;
import com.example.hope_dog.dto.page.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface NoticeMapper {

//    List<NoticeListDTO> noticeList();

    List<NoticeViewDTO> noticeView(Long noticeNo);


    //페이지네이션
    List<NoticeListDTO> selectAll();

    int selectTotal();

    List<NoticeListDTO> selectAllPage(Criteria criteria);

    List<AdminFileDTO> selectFileListByNoticeNo(@Param("noticeNo") Long noticeNo);


}
